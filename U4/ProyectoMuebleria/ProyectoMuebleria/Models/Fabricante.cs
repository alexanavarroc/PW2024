using System.ComponentModel.DataAnnotations;

namespace ProyectoMuebleria.Models
{
    public class Fabricante
    {
        [Key]
        public int IdFabricante { get; set; }
        public string Nombre { get; set; }

        public IEnumerable<Productos> Productos { get; set; }

    }
}
