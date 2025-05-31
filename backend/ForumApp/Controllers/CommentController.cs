using ForumApp.Data;
using ForumApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ForumApp.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CommentsController : ControllerBase
{
    private readonly ForumDbContext _context;

    public CommentsController(ForumDbContext context)
    {
        _context = context;
    }

    // GET: api/comments?postId=1
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Comment>>> GetComments([FromQuery] int? postId)
    {
        var query = _context.Comments.Include(c => c.User).Include(c => c.Post).AsQueryable();
        if (postId.HasValue)
        {
            query = query.Where(c => c.PostId == postId.Value);
        }
        return await query.ToListAsync();
    }

    // GET: api/comments/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Comment>> GetComment(int id)
    {
        var comment = await _context.Comments.Include(c => c.User).Include(c => c.Post).FirstOrDefaultAsync(c => c.Id == id);
        if (comment == null)
        {
            return NotFound();
        }
        return comment;
    }

    // POST: api/comments
    [HttpPost]
    public async Task<ActionResult<Comment>> CreateComment(Comment comment)
    {
        comment.Timestamp = DateTime.UtcNow;
        _context.Comments.Add(comment);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetComment), new { id = comment.Id }, comment);
    }

    // DELETE: api/comments/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteComment(int id, [FromHeader] int userId)
    {
        var comment = await _context.Comments.FindAsync(id);
        if (comment == null)
        {
            return NotFound();
        }

        if (comment.UserId != userId)
        {
            return Forbid();
        }

        _context.Comments.Remove(comment);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}