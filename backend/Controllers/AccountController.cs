using Backend.Data;
using Backend.Models;
using Backend.Models.ViewModels.Account;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

public class AccountController : Controller
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;
    private readonly BusinessDbContext _context;
    
    public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, BusinessDbContext context)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _context = context;
    }

    public IActionResult Login()
    {
        var response = new LoginViewModel();
        return View(response);
    }

    [HttpPost]
    public async Task<IActionResult> Login(LoginViewModel loginViewModel)
    {
        if (!ModelState.IsValid)
        {
            TempData["Error"] = "Lütfen geçerli bir email ve şifre giriniz.";
            
            return View(loginViewModel);
        }

        var user = await _userManager.FindByEmailAsync(loginViewModel.EmailAddress);
        
        if (user == null)
        {
            TempData["Error"] = "Email veya şifre hatalı, tekrar deneyiniz.";
            
            return View(loginViewModel);
        }

        var passwordCheck = await _userManager.CheckPasswordAsync(user, loginViewModel.Password);

        if (!passwordCheck)
        {
            TempData["Error"] = "Email veya şifre hatalı, tekrar deneyiniz.";
            
            return View(loginViewModel);
        }
        
        var result = await _signInManager.PasswordSignInAsync(user, loginViewModel.Password, false, false);

        if (result.Succeeded)
        {
            return RedirectToAction("Index", "Home");
        }
        
        TempData["Error"] = "Bir hata oluştu, lütfen tekrar deneyiniz.";
        
        return View(loginViewModel);
    }
    
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> Logout()
    {
        await _signInManager.SignOutAsync();
        
        return RedirectToAction("Login", "Account");
    }
    
    public IActionResult Register()
    {
        var response = new RegisterViewModel();
        return View(response);
    }
    
    [HttpPost]
    public async Task<IActionResult> Register(RegisterViewModel registerViewModel)
    {
        if (!ModelState.IsValid)
        {
            TempData["Error"] = "Lütfen geçerli bir email ve şifre giriniz.\n" +
                                "Şifreniz en az 6 karakterden oluşmalıdır;" +
                                "en az 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter (@ # $ % & * ! ? ; vb.) içermelidir.";
            
            return View(registerViewModel);
        }

        var user = _userManager.FindByEmailAsync(registerViewModel.EmailAddress);

        if (user != null)
        {
            TempData["Error"] = "Bu email adresi zaten kullanılmakta.";
            
            return View(registerViewModel);
        }

        var newUser = new AppUser()
        {
            UserName = registerViewModel.EmailAddress,
            Email = registerViewModel.EmailAddress
        };
        
        var result = await _userManager.CreateAsync(newUser, registerViewModel.Password);

        if (result.Succeeded)
        {
            await _userManager.AddToRoleAsync(newUser, UserRoles.User);
        }
        
        return RedirectToAction("Login", "Account");
    }
}