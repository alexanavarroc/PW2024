using System.ComponentModel.DataAnnotations;
namespace Proyecto_Muebleria.Models

{
    public class Categoria
    {
        [Key]
        public int IdCategoria { get; set; }
        public string Nombre { get; set; }
    }
}
