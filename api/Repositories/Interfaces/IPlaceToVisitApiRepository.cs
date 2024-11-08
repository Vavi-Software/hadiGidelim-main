using Backend.Models;

namespace Api.Repositories.Interfaces;

public interface IPlaceToVisitApiRepository
{
    Task<IEnumerable<PlaceToVisit>> GetAllPlaceToVisitAsync();
    Task<PlaceToVisit> GetPlaceToVisitByIdAsync(int id);
    Task<IEnumerable<PlaceToVisit>> GetPlaceToVisitByCategoryAsync(string category);
}