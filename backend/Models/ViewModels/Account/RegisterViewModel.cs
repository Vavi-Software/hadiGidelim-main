using System.ComponentModel.DataAnnotations;

namespace Backend.Models.ViewModels.Account;

public class RegisterViewModel
{
    [DataType(DataType.EmailAddress)]
    [Required(ErrorMessage = "Email alanı boş geçilemez.")]
    public string EmailAddress { get; set; }
    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Parola alanı boş geçilemez.")]
    public string Password { get; set; }
    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Yukarıda girdiğiniz parolayı tekrar giriniz.")]
    [Compare("Password", ErrorMessage = "Parolalar uyuşmuyor.")]
    public string ConfirmPassword { get; set; }
}