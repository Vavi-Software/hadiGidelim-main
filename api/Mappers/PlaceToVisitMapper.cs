using Api.Models.PlaceToVisit;
using Backend.Models;

namespace Api.Mappers;

public static class PlaceToVisitMapper
{
    public static PlaceToVisitDto ToPlaceToVisitDto(PlaceToVisit placeToVisit)
    {
        return new PlaceToVisitDto
        {
            Id = placeToVisit.Id,
            Name = placeToVisit.Name,
            Category = placeToVisit.Category,
            Address = placeToVisit.Address,
            City = placeToVisit.City,
            State = placeToVisit.State,
            Content = placeToVisit.Content,
            Price = placeToVisit.Price,
            OpeningTime = placeToVisit.OpeningTime,
            ClosingTime = placeToVisit.ClosingTime,
            ClickCount = placeToVisit.ClickCount,
            MainImage = placeToVisit.MainImage,
            Images = placeToVisit.Images
        };
    }
}