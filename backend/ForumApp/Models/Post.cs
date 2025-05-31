namespace ForumApp.Models;

public class Post
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Text { get; set; }
    public int UserId { get; set; }
    public DateTime Timestamp { get; set; }

    // Navigation properties
    public User? User { get; set; }
    public List<Comment>? Comments { get; set; }
}