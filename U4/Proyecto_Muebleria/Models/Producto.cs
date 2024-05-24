using System.ComponentModel.DataAnnotations;
namespace Proyecto_Muebleria.Models

{
    public class Producto
    {
        [Key]
        public int IdProducto { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int idFabricante { get; set; }
        public int idCategoria { get; set; }
        public double? Precio { get; set; }
        public byte[]? Modelo3D { get; set; }

        public int MyProperty { get; set; }

        public IEnumerable<Fabricante> Fabricantes { get; set; }
    }
}
