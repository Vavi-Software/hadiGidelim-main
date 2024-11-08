using System.ComponentModel.DataAnnotations;

namespace Backend.Models.ViewModels.Account;

public class LoginViewModel
{
    [DataType(DataType.EmailAddress)]
    [Required(ErrorMessage = "Email alanı boş geçilemez.")]
    public string EmailAddress { get; set; }
    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Şifre alanı boş geçilemez.")]
    public string Password { get; set; }
}