using Backend.Data;
using Backend.Models;
using Backend.Models.ViewModels.Image;
using Backend.Models.ViewModels.PlaceToVisit;
using Backend.Repository.Interfaces;
using Backend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Authorize(Roles = UserRoles.Admin)]
public class PlaceToVisitController : Controller
{
    private readonly IPlaceToVisitRepository _placeRepo;
    private readonly IImageService _imageService;
    
    public PlaceToVisitController(IPlaceToVisitRepository placeRepo, IImageService imageService)
    {
        _placeRepo = placeRepo;
        _imageService = imageService;
    }
    
    public async Task<IActionResult> Index()
    {
        var placesToVisit = await _placeRepo.GetAllPlacesToVisitAsync();
        
        return View(placesToVisit);
    }
    
    public async Task<IActionResult> Detail([FromRoute] int id)
    {
        var placeToVisit = await _placeRepo.GetPlaceToVisitByIdAsync(id);
        
        return View(placeToVisit);
    }
    
    public IActionResult Create()
    {
        return View();
    }
    
    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreatePlaceToVisitViewModel placeToVisitVM)
    {
        if (ModelState.IsValid)
        {
            if (placeToVisitVM.Images.Count > 0)
            {
                var imageList = new List<Image>();
                
                foreach (var image in placeToVisitVM.Images)
                {
                    // var result = await _photoService.AddPhotoAsync(image);
                    var result = await _imageService.AddImageAsync(image);
                    
                    imageList.Add(new Image
                    {
                        Name = placeToVisitVM.Name,
                        Url = result,
                        Price = 0
                    });
                }
                
                var placeToVisit = new PlaceToVisit
                {
                    Id = placeToVisitVM.Id,
                    Name = placeToVisitVM.Name,
                    Category = placeToVisitVM.Category,
                    Address = placeToVisitVM.Address,
                    City = placeToVisitVM.City,
                    State = placeToVisitVM.State,
                    Content = placeToVisitVM.Content,
                };
                
                if (imageList.Count > 0)
                {
                    placeToVisit.MainImage = imageList[0].Url;
                }
                
                foreach (var image in imageList)
                {
                    placeToVisit.Images.Add(image);
                }
            
                await _placeRepo.AddAsync(placeToVisit);
            
                return RedirectToAction("Index");
            }
        }
        else
        {
            ModelState.AddModelError("", "Gezilecek yer oluşturulamadı.");
        }

        return View(placeToVisitVM);
    }
    
    public async Task<IActionResult> Update([FromRoute] int id)
    {
        var placeToVisit = await _placeRepo.GetPlaceToVisitByIdAsync(id);

        if (placeToVisit == null)
        {
            return View("Error");
        }
        
        var placeToVisitVM = new EditPlaceToVisitViewModel
        {
            Id = placeToVisit.Id,
            Name = placeToVisit.Name,
            Category = placeToVisit.Category,
            Address = placeToVisit.Address,
            City = placeToVisit.City,
            State = placeToVisit.State,
            Content = placeToVisit.Content,
        };
        
        foreach (var image in placeToVisit.Images)
        {
            placeToVisitVM.ImagesURL.Add(image.Url);
        }

        return View(placeToVisitVM);
    }
    
    [HttpPost]
    public async Task<IActionResult> Update([FromRoute] int id, [FromForm] EditPlaceToVisitViewModel placeToVisitVM)
    {
        if (!ModelState.IsValid)
        {
            ModelState.AddModelError("", "Gezilecek yer düzenlenemedi.");
            return View("Update", placeToVisitVM);
        }
        
        var placeToVisit = await _placeRepo.GetPlaceToVisitByIdAsyncNoTracking(id);

        if (placeToVisit != null)
        {
            var imageList = new List<Image>();

            foreach (var image in placeToVisit.Images)
            {
                imageList.Add(image);
            }

            foreach (var image in placeToVisitVM.Images)
            {
                var result = await _imageService.AddImageAsync(image);
            
                imageList.Add(new Image
                {
                    Name = placeToVisitVM.Name,
                    Url = result,
                    Price = 0
                });
            }
            
            var newPlaceToVisit = new PlaceToVisit
            {
                Id = id,
                Name = placeToVisitVM.Name,
                Category = placeToVisitVM.Category,
                Address = placeToVisitVM.Address,
                City = placeToVisitVM.City,
                State = placeToVisitVM.State,
                Content = placeToVisitVM.Content
            };

            if (imageList.Count > 0)
            {
                newPlaceToVisit.MainImage = imageList[0].Url;
            }
            
            foreach (var image in imageList)
            {
                newPlaceToVisit.Images.Add(image);
            }
            
            await _placeRepo.UpdateAsync(newPlaceToVisit);
            
            return RedirectToAction("Index", "PlaceToVisit");
        }
        
        return View(placeToVisitVM);
    }
    
    public IActionResult DeleteImage([FromRoute] int id)
    {
        return View();
    }
    
    [HttpPost]
    public async Task<IActionResult> DeleteImage([FromForm] int id, [FromForm] string imageUrl)
    {
        var placeToVisit = await _placeRepo.GetPlaceToVisitByIdAsync(id);

        if (placeToVisit != null)
        {
            try
            {
                foreach (var image in placeToVisit.Images.ToList())
                {
                    if (image.Url == imageUrl)
                    {
                        placeToVisit.Images.Remove(image);

                        if (imageUrl == placeToVisit.MainImage) placeToVisit.MainImage = "";
                        
                        _imageService.DeleteImage(imageUrl);
                        await _placeRepo.UpdateAsync(placeToVisit);
                    }
                }
                
                return RedirectToAction("Update", new { id });
            }
            catch (Exception e)
            {
                ModelState.AddModelError("", "Fotoğraf silinemedi.");
                return RedirectToAction("Detail", new { id });
            }
        }

        return RedirectToAction("Index");
    }
    
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        var placeToVisit = await _placeRepo.GetPlaceToVisitByIdAsync(id);

        if (placeToVisit == null)
        {
            return View("Error");
        }
        
        return View(placeToVisit);
    }
    
    [HttpPost, ActionName("Delete")]
    public async Task<IActionResult> DeletePTV([FromForm] int id)
    {
        var placeToVisit = await _placeRepo.GetPlaceToVisitByIdAsync(id);

        if (placeToVisit != null)
        {
            try
            {
                foreach (var image in placeToVisit.Images)
                {
                    _imageService.DeleteImage(image.Url);
                }
                
                await _placeRepo.DeleteAsync(placeToVisit);
                
                return RedirectToAction("Index", "PlaceToVisit");
            }
            catch (Exception e)
            {
                ModelState.AddModelError("", "Gezilecek yer silinemedi.");
                
                return View("Delete", placeToVisit);
            }
        }

        return RedirectToAction("Index");
    }
}