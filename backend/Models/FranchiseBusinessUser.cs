using Microsoft.AspNetCore.Identity;

namespace Backend.Models;

public class FranchiseBusinessUser : IdentityUser
{
    public ICollection<BusinessModel> BusinessModels { get; set; } = new List<BusinessModel>();
}