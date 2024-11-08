using Api.Mappers;
using Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/place-to-visit")]
public class PlaceToVisitApiController : ControllerBase
{
    private readonly IPlaceToVisitApiRepository _placeToVisitApiRepo;
    
    public PlaceToVisitApiController(IPlaceToVisitApiRepository placeToVisitApiRepo)
    {
        _placeToVisitApiRepo = placeToVisitApiRepo;
    }
    
    [HttpGet]
    [Route("all")]
    public async Task<IActionResult> GetAllPlaceToVisit()
    {
        var placesToVisit = await _placeToVisitApiRepo.GetAllPlaceToVisitAsync();
        var placesToVisitDto = placesToVisit.Select(placeToVisit => PlaceToVisitMapper.ToPlaceToVisitDto(placeToVisit));
        
        return Ok(placesToVisitDto);
    }
    
    [HttpGet]
    [Route("{id:int}")]
    public async Task<IActionResult> GetPlaceToVisitById([FromRoute] int id)
    {
        var placeToVisit = await _placeToVisitApiRepo.GetPlaceToVisitByIdAsync(id);
        
        if (placeToVisit == null)
        {
            return NotFound();
        }
        
        var placeToVisitDto = PlaceToVisitMapper.ToPlaceToVisitDto(placeToVisit);
        
        return Ok(placeToVisitDto);
    }
}