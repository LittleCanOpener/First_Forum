namespace ForumApp.Models;

public class Comment
{
    public int Id { get; set; }
    public string? Text { get; set; }
    public int PostId { get; set; }
    public int UserId { get; set; }
    public DateTime Timestamp { get; set; }

    // Navigation properties
    public User? User { get; set; }
    public Post? Post { get; set; }
}