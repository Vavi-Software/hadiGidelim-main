using Backend.Models.ViewModels.Image;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Build.Framework;

namespace Backend.Models.ViewModels.PlaceToVisit;

public class CreatePlaceToVisitViewModel
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; } = string.Empty;
    [Required]
    public string Category { get; set; } = string.Empty;
    [Required]
    public string Address { get; set; } = string.Empty;
    [Required]
    public string City { get; set; } = string.Empty;
    [Required]
    public string State { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public TimeSpan OpeningTime { get; set; }
    public TimeSpan ClosingTime { get; set; }
    [Required]
    public string Content { get; set; } = string.Empty;
    [Required]
    public List<IFormFile> Images { get; set; } = new();
}