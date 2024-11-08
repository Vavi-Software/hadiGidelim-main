using Backend.Services.Interfaces;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using Image = SixLabors.ImageSharp.Image;


namespace Backend.Services.Implementations;

public class ImageService : IImageService
{
    
    public async Task<string> AddImageAsync(IFormFile file)
    {
        await using var input = file.OpenReadStream();
        using var output = new MemoryStream();
        using var image = await Image.LoadAsync(input);
        
        var res = image.Height - image.Width;
        
        if (res < 0)
        {
            var center = (image.Width - image.Height) / 2;
            
            image.Mutate(x => x.Crop(new Rectangle(center, 0, image.Height, image.Height)));
        }
        else if (res > 0)
        {
            var center = (image.Height - image.Width) / 2;
            
            image.Mutate(x => x.Crop(new Rectangle(0, center, image.Width, image.Width)));
        }
        
        image.Mutate(x => x.Resize(720, 720));

        var uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetExtension(file.FileName);
        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", uniqueFileName);

        await image.SaveAsync(filePath);

        return uniqueFileName;
    }

    public void DeleteImage(string url)
    {
        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", url);
        
        if (File.Exists(filePath))
        {
            File.Delete(filePath);
        }
    }
}