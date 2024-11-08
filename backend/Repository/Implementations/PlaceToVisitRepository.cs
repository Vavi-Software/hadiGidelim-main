using Backend.Data;
using Backend.Models;
using Backend.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repository.Implementations;

public class PlaceToVisitRepository : IPlaceToVisitRepository
{
    private readonly BusinessDbContext _context;
    
    public PlaceToVisitRepository(BusinessDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<PlaceToVisit>> GetAllPlacesToVisitAsync()
    {
        return await _context.PlacesToVisit.Include(i => i.Images).ToListAsync();
    }

    public async Task<PlaceToVisit> GetPlaceToVisitByIdAsync(int id)
    {
        return await _context.PlacesToVisit.Include(i => i.Images).FirstOrDefaultAsync(p => p.Id == id);
    }
    
    public async Task<PlaceToVisit> GetPlaceToVisitByIdAsyncNoTracking(int id)
    {
        return await _context.PlacesToVisit.Include(i => i.Images).AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<PlaceToVisit> GetPlaceToVisitByNameAsync(string name)
    {
        return await _context.PlacesToVisit.Include(i => i.Images).FirstOrDefaultAsync(p => p.Name == name);
    }

    public async Task<IEnumerable<PlaceToVisit>> GetPlaceToVisitByCityAsync(string city)
    {
        return await _context.PlacesToVisit.Include(i => i.Images).Where(p => p.City == city).ToListAsync();
    }

    public async Task<IEnumerable<PlaceToVisit>> GetPlaceToVisitByStateAsync(string state)
    {
        return await _context.PlacesToVisit.Include(i => i.Images).Where(p => p.State == state).ToListAsync();
    }

    public async Task<bool> AddAsync(PlaceToVisit placeToVisit)
    {
        await _context.PlacesToVisit.AddAsync(placeToVisit);
        
        return await SaveAsync();
    }

    public async Task<bool> UpdateAsync(PlaceToVisit placeToVisit)
    {
        _context.PlacesToVisit.Update(placeToVisit);
        
        return await SaveAsync();
    }

    public async Task<bool> DeleteAsync(PlaceToVisit placeToVisit)
    {
        _context.PlacesToVisit.Remove(placeToVisit);
        
        return await SaveAsync();
    }

    public async Task<bool> SaveAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}