using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ForumApp.Migrations
{
    /// <inheritdoc />
    public partial class AddStaticSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Password" },
                values: new object[] { 1, "admin@example.com", "$2a$10$Xk5QeZ8F8Xj9R3k7pLmX2O.qzL4mX5Y6Z7K8L9M0N1P2Q3R4S5T6U" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "Id", "Text", "Timestamp", "Title", "UserId" },
                values: new object[] { 1, "This is the first post!", new DateTime(2025, 5, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Welcome Post", 1 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
