namespace ForumApp.Models;

public class User
{
    public int Id { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }

    // Navigation properties
    public List<Post>? Posts { get; set; }
    public List<Comment>? Comments { get; set; }
}