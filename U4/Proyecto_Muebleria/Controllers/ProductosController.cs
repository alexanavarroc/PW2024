using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto_Muebleria.Data;
using Proyecto_Muebleria.Models;

namespace Proyecto_Muebleria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductosController : Controller
    {
        private readonly MiContexto _miContexto;
        public ProductosController(MiContexto miContexto)
        {
            _miContexto = miContexto;
        }

        [HttpGet("ListadoProductos")]
        public async Task<IActionResult> ListadoProductos()
        {
            try
            {
            var categorias = await _miContexto.Productos.ToListAsync();
            return Ok(categorias);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("DameProducto")]
        public async Task<IActionResult> DameProducto(int idProducto)
        {
            bool existe = await _miContexto.Productos.Where(c => c.IdProducto == idProducto).AnyAsync();
            if (existe)
            {
                Producto producto = await _miContexto.Productos.Where(c => c.IdProducto == idProducto).FirstOrDefaultAsync();
                return Ok(producto);
            }
            else
            {
                return BadRequest("No se encontro el producto");
            }
        }

        [HttpPost("AgregaProducto")]
        public async Task<IActionResult> AgregaProducto(
            [FromForm] string nombreAgregar,
            [FromForm] string descripcionAgregar,
            [FromForm] int idFabricanteAgregar,
            [FromForm] int idCategoriaAgregar,
            [FromForm] decimal precioAgregar)
        {
            string modelo3DAgregar = "";
            string foto1Agregar = "";
            string foto2Agregar = "";
            var files = HttpContext.Request.Form.Files;
            if (files == null || files.Count == 0)
            {
                return BadRequest("No files received from the upload");
            }

            foreach (var file in files)
            {
                var folderPath = Path.Combine(Directory.GetCurrentDirectory(),"wwwroot", "UploadedFiles");

                // Verificar que exista la carpeta
                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                // Agregar marca de tiempo (timestamp) al archivo
                var timestamp = DateTime.Now.ToString("yyyyMMddHHmmssfff");
                var originalFileName = Path.GetFileNameWithoutExtension(file.FileName);
                var extension = Path.GetExtension(file.FileName);
                var newFileName = $"{originalFileName}_{timestamp}{extension}";
                var filePath = Path.Combine(folderPath, newFileName);
                // Guardar en el folder
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
                if (extension.ToLower() == ".glb")
                {
                    modelo3DAgregar = newFileName;
                }
                else
                {
                    if (foto1Agregar == string.Empty)
                    {
                        foto1Agregar = newFileName;
                    }
                    else
                    {
                        foto2Agregar = newFileName;
                    }
                }
            
            }

            //por hacer

            //guardar en bd
            Producto nuevoProducto = new Producto();
            nuevoProducto.Nombre = nombreAgregar;
            nuevoProducto.Descripcion = descripcionAgregar;
            nuevoProducto.IdFabricante = idFabricanteAgregar;
            nuevoProducto.IdCategoria = idCategoriaAgregar;
            nuevoProducto.Precio = precioAgregar;
            nuevoProducto.Modelo3D = modelo3DAgregar;
            nuevoProducto.Foto1 = foto1Agregar;
            nuevoProducto.Foto2 = foto2Agregar;

            try
            {
                _miContexto.Productos.Add(nuevoProducto);
                await _miContexto.SaveChangesAsync();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(new
            {
                Message = "Producto guardado",
                nombreAgregar,
                descripcionAgregar,
                idFabricanteAgregar,
                idCategoriaAgregar,
                precioAgregar,
                FileCount = files.Count,
                TotalSize = files.Sum(f => f.Length)
            });
        }

    }
}
