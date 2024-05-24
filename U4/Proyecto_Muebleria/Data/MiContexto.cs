using Microsoft.EntityFrameworkCore;
using Proyecto_Muebleria.Models;

namespace Proyecto_Muebleria.Data
{
    public class MiContexto: DbContext
    {

        public MiContexto(DbContextOptions<MiContexto>options): base(options) { }

        public DbSet<Producto> Productos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Fabricante> Fabricantes { get; set; }
    }
}
