using Backend.Data;
using Backend.Models;
using Backend.Repository.Implementations;
using Backend.Repository.Interfaces;
using Backend.Services.Implementations;
using Backend.Services.Interfaces;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<IPlaceToVisitRepository, PlaceToVisitRepository>();
builder.Services.AddScoped<IImageService, ImageService>();

builder.Services.AddDbContext<BusinessDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
    );

builder.Services.AddIdentity<AppUser, IdentityRole>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<BusinessDbContext>();

builder.Services.Configure<IdentityOptions>(options =>
{
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase = true;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 1;
    
    options.SignIn.RequireConfirmedAccount = false;
    options.SignIn.RequireConfirmedEmail = false;
    
    options.User.RequireUniqueEmail = true;
});


builder.Services.AddMemoryCache();
builder.Services.AddSession();
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

using (var scope = app.Services.CreateScope())
{
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    var roles = new[] { UserRoles.Admin, UserRoles.User };

    foreach (var role in roles)
    {
        if (!await roleManager.RoleExistsAsync(role))
        {
            await roleManager.CreateAsync(new IdentityRole(role));
        }
    }
}

using (var scope = app.Services.CreateScope())
{
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();

    string email = "adminhg@admin.com";
    string password = "HGadmin321!";

    string userEmail = "onurbaki@gmail.com";
    string userPassword = "Onur123!";

    

    if (await userManager.FindByEmailAsync(email) == null)
    {
        var user = new AppUser()
        {
            UserName = email,
            Email = email
        };

        var result = await userManager.CreateAsync(user, password);

        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(user, UserRoles.Admin);
        }
    }
    
    if (await userManager.FindByEmailAsync(userEmail) == null)
    {
        var user = new AppUser()
        {
            UserName = userEmail,
            Email = userEmail
        };

        var result = await userManager.CreateAsync(user, userPassword);

        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(user, UserRoles.User);
        }
    }
}

app.Run();
