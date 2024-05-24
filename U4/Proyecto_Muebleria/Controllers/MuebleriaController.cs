using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto_Muebleria.Data;
using Proyecto_Muebleria.Models;
using System.Threading.Tasks;

namespace ProyectoMuebleria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MuebleriaController : Controller
    {
        private readonly MiContexto _miContexto;

        public MuebleriaController(MiContexto miContexto)
        {
            _miContexto = miContexto;
        }

        // Métodos para categorías...

        [HttpGet("ListadoCategorias")]
        public async Task<IActionResult> ListadoCategorias()
        {
            var categorias = await _miContexto.Categorias.ToListAsync();
            return Ok(categorias);
        }

        [HttpGet("DameCategoria")]
        public async Task<IActionResult> DameCategoria(int idCategoria)
        {
            bool existe = await _miContexto.Categorias.Where(c => c.IdCategoria == idCategoria).AnyAsync();
            if (existe)
            {
                Categoria categoria = await _miContexto.Categorias.Where(c => c.IdCategoria == idCategoria).FirstOrDefaultAsync();
                return Ok(categoria);
            }
            else
            {
                return BadRequest("No se encontro la categoria");
            }
        }

        [HttpPost("AgregaCategoria")]
        public async Task<IActionResult> AgregarCategoria(string nombreAgregar)
        {
            bool existeCategoria = await _miContexto.Categorias.Where(c => c.Nombre.ToLower().Trim() == nombreAgregar.ToLower().Trim()).AnyAsync();
            if (existeCategoria)
            {
                return BadRequest("La categoria ya existe");
            }
            else
            {
                Categoria nuevaCategoria = new Categoria();
                nuevaCategoria.Nombre = nombreAgregar;
                _miContexto.Categorias.Add(nuevaCategoria);
                _miContexto.SaveChanges();
                return Ok(nuevaCategoria);
            }
        }

        [HttpPut("ActualizarCategoria")]
        public async Task<IActionResult> ActualizarCategoria(int idCategoriaActualizar, string nombreActualizado)
        {
            bool existe = await _miContexto.Categorias.Where(c => c.IdCategoria == idCategoriaActualizar).AnyAsync();
            if (existe)
            {
                Categoria categoriaActualizar = await _miContexto.Categorias.Where
                    (c => c.IdCategoria == idCategoriaActualizar).FirstOrDefaultAsync();
                categoriaActualizar.Nombre = nombreActualizado;
                _miContexto.Update(categoriaActualizar);
                _miContexto.SaveChanges();
                return Ok(categoriaActualizar);
            }
            else
            {
                return BadRequest("No se encontro la categoria a actualizar");
            }
        }

        [HttpDelete("EliminaCategoria")]
        public async Task<IActionResult> EliminarCategoria(int idCategoriaEliminar)
        {
            Categoria categoriaEliminar = await _miContexto.Categorias.Where
                (c => c.IdCategoria == idCategoriaEliminar).FirstOrDefaultAsync();
            if (categoriaEliminar != null)
            {
                _miContexto.Remove(categoriaEliminar);
                _miContexto.SaveChanges();
                return Ok("Categoria Eliminada");
            }
            else
            {
                return BadRequest("No se encontro la categoria");
            }
        }

        // Métodos para fabricantes...

        [HttpGet("ListadoFabricantes")]
        public async Task<IActionResult> ListadoFabricantes()
        {
            var fabricantes = await _miContexto.Fabricantes.ToListAsync();
            return Ok(fabricantes);
        }

        [HttpGet("DameFabricante")]
        public async Task<IActionResult> DameFabricante(int idFabricante)
        {
            bool existe = await _miContexto.Fabricantes.AnyAsync(f => f.IdFabricante == idFabricante);
            if (existe)
            {
                Fabricante fabricante = await _miContexto.Fabricantes.FindAsync(idFabricante);
                return Ok(fabricante);
            }
            else
            {
                return BadRequest("No se encontró el fabricante");
            }
        }

        [HttpPost("AgregaFabricante")]
        public async Task<IActionResult> AgregarFabricante(string nombreAgregar)
        {
            bool existeFabricante = await _miContexto.Fabricantes.AnyAsync(f => f.Nombre.ToLower().Trim() == nombreAgregar.ToLower().Trim());
            if (existeFabricante)
            {
                return BadRequest("El fabricante ya existe");
            }
            else
            {
                Fabricante nuevoFabricante = new Fabricante();
                nuevoFabricante.Nombre = nombreAgregar;
                _miContexto.Fabricantes.Add(nuevoFabricante);
                await _miContexto.SaveChangesAsync();
                return Ok(nuevoFabricante);
            }
        }

        [HttpPut("ActualizarFabricante")]
        public async Task<IActionResult> ActualizarFabricante(int idFabricanteActualizar, string nombreActualizado)
        {
            Fabricante fabricanteActualizar = await _miContexto.Fabricantes.FindAsync(idFabricanteActualizar);
            if (fabricanteActualizar != null)
            {
                fabricanteActualizar.Nombre = nombreActualizado;
                await _miContexto.SaveChangesAsync();
                return Ok(fabricanteActualizar);
            }
            else
            {
                return BadRequest("No se encontró el fabricante a actualizar");
            }
        }

        [HttpDelete("EliminaFabricante")]
        public async Task<IActionResult> EliminarFabricante(int idFabricanteEliminar)
        {
            Fabricante fabricanteEliminar = await _miContexto.Fabricantes.FindAsync(idFabricanteEliminar);
            if (fabricanteEliminar != null)
            {
                _miContexto.Fabricantes.Remove(fabricanteEliminar);
                await _miContexto.SaveChangesAsync();
                return Ok("Fabricante Eliminado");
            }
            else
            {
                return BadRequest("No se encontró el fabricante");
            }
        }
    }
}






