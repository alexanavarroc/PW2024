using System.ComponentModel.DataAnnotations;

namespace ProyectoMuebleria.Models
{
    public class Categoria
    {
        [Key]
        public int IdCategoria { get; set; }
        public string Nombre { get; set;}

    }
}
