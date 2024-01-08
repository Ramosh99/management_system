using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace signin_forAPI.Model.Dto
{
    public class N_DataDTO
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? User_Name { get; set; }
        public string? Password { get; set; }
        
    }
}
