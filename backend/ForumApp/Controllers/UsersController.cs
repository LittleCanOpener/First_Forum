using ForumApp.Data;
  using ForumApp.Models;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.EntityFrameworkCore;
  using BCrypt.Net;
  using System.Threading.Tasks;

  namespace ForumApp.Controllers;

  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
      private readonly ForumDbContext _context;

      public UsersController(ForumDbContext context)
      {
          _context = context;
      }

      [HttpPost("login")]
      public async Task<ActionResult<User>> Login([FromBody] LoginRequest request)
      {
          var user = await _context.Users
              .FirstOrDefaultAsync(u => u.Email == request.Email);

          if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
          {
              return BadRequest("Invalid email or password.");
          }

          return Ok(user);
      }

      [HttpPost]
      public async Task<ActionResult<User>> CreateUser(User user)
      {
          user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
          _context.Users.Add(user);
          await _context.SaveChangesAsync();
          return CreatedAtAction(nameof(CreateUser), new { id = user.Id }, user);
      }
  }

  public class LoginRequest
  {
      public string? Email { get; set; }
      public string? Password { get; set; }
  }