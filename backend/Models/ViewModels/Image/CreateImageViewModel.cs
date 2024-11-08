namespace Backend.Models.ViewModels.Image;

public class CreateImageViewModel
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public IFormFile File { get; set; }
    public decimal? Price { get; set; }
}