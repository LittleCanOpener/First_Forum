using ForumApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ForumApp.Data;

public class ForumDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Comment> Comments { get; set; }

    public ForumDbContext(DbContextOptions<ForumDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();

        modelBuilder.Entity<User>()
            .HasMany(u => u.Posts)
            .WithOne(p => p.User)
            .HasForeignKey(p => p.UserId);

        modelBuilder.Entity<User>()
            .HasMany(u => u.Comments)
            .WithOne(c => c.User)
            .HasForeignKey(c => c.UserId);

        modelBuilder.Entity<Post>()
            .HasMany(p => p.Comments)
            .WithOne(c => c.Post)
            .HasForeignKey(c => c.PostId);

        // Seed data with static values
        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, Email = "admin@example.com", Password = "$2a$10$Xk5QeZ8F8Xj9R3k7pLmX2O.qzL4mX5Y6Z7K8L9M0N1P2Q3R4S5T6U" }
        );
        modelBuilder.Entity<Post>().HasData(
            new Post { Id = 1, Title = "Welcome Post", Text = "This is the first post!", UserId = 1, Timestamp = new DateTime(2025, 5, 1) }
        );
    }
}