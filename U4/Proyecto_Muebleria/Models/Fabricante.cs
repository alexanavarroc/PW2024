using System.ComponentModel.DataAnnotations;
namespace Proyecto_Muebleria.Models
{
    public class Fabricante
    {
        //POCO : Plain Old 
        [Key]
        public int IdFabricante { get; set; }
        public string Nombre { get; set; }
        public IEnumerable<Producto> Productos{ get; set; }

    }
}
 