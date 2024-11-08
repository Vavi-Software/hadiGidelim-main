using Backend.Models;

namespace Api.Models.PlaceToVisit;

public class PlaceToVisitDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public TimeSpan OpeningTime { get; set; }
    public TimeSpan ClosingTime { get; set; }
    public int ClickCount { get; set; }
    public string? MainImage { get; set; } = string.Empty;
    public List<Image> Images { get; set; } = new();
}