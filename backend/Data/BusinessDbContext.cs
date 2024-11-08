using Backend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class BusinessDbContext : IdentityDbContext<AppUser>
{
    public BusinessDbContext(DbContextOptions<BusinessDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<SingleBusinessUser> SingleBusinessUsers { get; set; } 
    public DbSet<FranchiseBusinessUser> FranchiseBusinessUsers { get; set; }
    public DbSet<PlaceToVisit> PlacesToVisit { get; set; }
    public DbSet<Image> Images { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<PlaceToVisit>()
            .HasMany(p => p.Images)
            .WithOne()
            .HasForeignKey("PlaceToVisitId")
            .OnDelete(DeleteBehavior.Cascade);
    }
}