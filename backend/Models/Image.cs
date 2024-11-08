using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

[Table("Images")]
public class Image
{
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    [Column(TypeName = "nvarchar(250)")]
    public string? Content { get; set; } = string.Empty;
    public string Url { get; set; }
    [Column(TypeName = "decimal(9,2)")]
    public decimal Price { get; set; }
}