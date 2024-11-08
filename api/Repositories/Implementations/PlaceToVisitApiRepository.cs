using Api.Repositories.Interfaces;
using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Repositories.Implementations;

public class PlaceToVisitApiRepository : IPlaceToVisitApiRepository
{
    private readonly BusinessDbContext _context;
    
    public PlaceToVisitApiRepository(BusinessDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<PlaceToVisit>> GetAllPlaceToVisitAsync()
    {
        return await _context.PlacesToVisit.Include(placeToVisit => placeToVisit.Images).ToListAsync();
    }

    public async Task<PlaceToVisit> GetPlaceToVisitByIdAsync(int id)
    {
        return await _context.PlacesToVisit.Include(placeToVisit => placeToVisit.Images).FirstOrDefaultAsync(placeToVisit => placeToVisit.Id == id);
    }

    public async Task<IEnumerable<PlaceToVisit>> GetPlaceToVisitByCategoryAsync(string category)
    {
        return await _context.PlacesToVisit.Include(placeToVisit => placeToVisit.Images).Where(placeToVisit => placeToVisit.Category == category).ToListAsync();
    }
}