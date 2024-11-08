using Microsoft.AspNetCore.Identity;

namespace Backend.Models;

public class AppUser : IdentityUser
{
    public bool IsAuthenticated { get; set; } = false;
}