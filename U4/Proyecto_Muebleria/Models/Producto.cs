using System.ComponentModel.DataAnnotations;
namespace Proyecto_Muebleria.Models

{
    public class Producto
    {
        [Key]
        public int IdProducto { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int IdFabricante { get; set; }
        public int IdCategoria { get; set; }
        public decimal Precio { get; set; }
        public string? Modelo3D { get; set; }
        public string? Foto1 { get; set; }
        public string? Foto2 { get; set; }



        public IEnumerable<Fabricante> Fabricantes { get; set; }
    }
}
