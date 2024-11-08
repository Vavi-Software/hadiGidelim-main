using Microsoft.Build.Framework;

namespace Backend.Models.ViewModels.PlaceToVisit;

public class EditPlaceToVisitViewModel
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
    [Required]
    public string Content { get; set; } = string.Empty;
    public List<string> ImagesURL { get; set; } = new();
    [Required]
    public List<IFormFile> Images { get; set; } = new();
}