using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class BusinessModel
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string SubCategory { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? WebsiteUrl { get; set; }
    public string? InstagramUrl { get; set; }
    public int ClickCount { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public bool IsPremium { get; set; } = false;
    public bool IsVerified { get; set; } = false;
    public bool IsFranchise { get; set; } = false;
    public string? ProfileImage { get; set; } = string.Empty;
    public List<Image> Images { get; set; } = new();
}