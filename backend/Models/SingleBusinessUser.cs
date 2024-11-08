using Microsoft.AspNetCore.Identity;

namespace Backend.Models;

public class SingleBusinessUser : IdentityUser
{
    public int BusinessModelId { get; set; }
    public BusinessModel BusinessModel { get; set; } = new();
}