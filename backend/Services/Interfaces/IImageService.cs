namespace Backend.Services.Interfaces;

public interface IImageService
{
    Task<string> AddImageAsync(IFormFile file);
    void DeleteImage(string url);
}