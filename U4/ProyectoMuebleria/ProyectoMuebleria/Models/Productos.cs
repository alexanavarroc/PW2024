using System.ComponentModel.DataAnnotations;

namespace ProyectoMuebleria.Models
{
    public class Productos
    {
        [Key]
        public int IdProducto { get; set; }
        public string Nombre { get; set; }
        public string? Descripcion { get; set; }
        public int IdFabricante { get; set; }
        public int IdCategoria { get; set; }

        public double? Precio { get; set; }
        public byte[]? Modelo3D { get; set; }

        public IEnumerable<Fabricante> Fabricantes { get; set;}
    }
}
