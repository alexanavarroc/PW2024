using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoMuebleria.Data;
using ProyectoMuebleria.Models;
using System.Diagnostics.Eventing.Reader;

namespace ProyectoMuebleria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MuebleriaController : Controller
    {
        private readonly MiContexto _miContexto;
        public MuebleriaController(MiContexto miContexto) {
            _miContexto = miContexto;
        }
        [HttpGet("Listado de categorias")]
        public async Task<IActionResult> ListadoCategorias()
        {
            var categorias = await _miContexto.Categorias.ToListAsync();
            return Ok(categorias);
        }

        [HttpGet("DameCategoria")]
        public async Task<IActionResult> DameCategoria(int idCategoria)
        {
            bool existe = await _miContexto.Categorias.Where(c => c.IdCategoria == idCategoria).AnyAsync();
            if(existe)
            {
                Categoria categoria = await _miContexto.Categorias.Where( c => c.IdCategoria == idCategoria).FirstOrDefaultAsync();
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
                return BadRequest("Ya existe la categoria");
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
            bool existe = await _miContexto.Categorias.Where( c => c.IdCategoria == idCategoriaActualizar).AnyAsync();
            if (existe)
            {
                Categoria categoriaActualizar = await _miContexto.Categorias.Where(c => c.IdCategoria == idCategoriaActualizar).FirstOrDefaultAsync();
                categoriaActualizar.Nombre = nombreActualizado;
                _miContexto.Update(categoriaActualizar);
                _miContexto.SaveChanges();
                return Ok(categoriaActualizar);
            }
            else
            {
                return BadRequest("No se encontró la categoría actualizar");
            }
        }

        [HttpDelete("EliminaCategoria")]
        public async Task<IActionResult> EliminaCategoria(int idCategoriaEliminar)
        {
            Categoria categoriaEliminar = await _miContexto.Categorias.Where( c => c.IdCategoria == idCategoriaEliminar).FirstOrDefaultAsync();
            if(categoriaEliminar != null)
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
    }
}
