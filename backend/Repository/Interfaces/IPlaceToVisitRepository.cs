using Backend.Models;

namespace Backend.Repository.Interfaces;

public interface IPlaceToVisitRepository
{
    Task<IEnumerable<PlaceToVisit>> GetAllPlacesToVisitAsync();
    Task<PlaceToVisit> GetPlaceToVisitByIdAsync(int id);
    Task<PlaceToVisit> GetPlaceToVisitByIdAsyncNoTracking(int id);
    Task<PlaceToVisit> GetPlaceToVisitByNameAsync(string name);
    Task<IEnumerable<PlaceToVisit>> GetPlaceToVisitByCityAsync(string city);
    Task<IEnumerable<PlaceToVisit>> GetPlaceToVisitByStateAsync(string state);
    Task<bool> AddAsync(PlaceToVisit placeToVisit);
    Task<bool> UpdateAsync(PlaceToVisit placeToVisit);
    Task<bool> DeleteAsync(PlaceToVisit placeToVisit);
    Task<bool> SaveAsync();
}