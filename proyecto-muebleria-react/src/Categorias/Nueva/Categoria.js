import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Categoria.css";
 
export default function Categoria() {
  const navigate = useNavigate();
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [error, setError] = useState(null);
 
  function guardaCategoriaEnEstado(e) {
    setNombreCategoria(e.target.value);
  }
 
  const guardaCategoria = async () => {
    try {
      // Hacer el request POST
      const response = await axios.post(
        "https://localhost:7152/Muebleria/AgregaCategoria?nombreAgregar=" + // cambiar puerto
          nombreCategoria,
      );
      if (response.status === 200) {
        navigate("/CategoriasListado");
      }
    } catch (error) {
      // En caso de error
      setError(error);
    }
  };
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="container-fluid">
      <h1>Nueva Categoria</h1>
      <form>
        <div class="form-group">
          <label for="Nombre">Nombre de Categoria</label>
          <input type="text" class="form-control" id="Nombre"
          onChange={(e) => guardaCategoriaEnEstado} />
        </div>
        <div className="posicion-botones ">
          <a href="/CategoriasListado" className="btn btn-secondary">
            Cancelar
          </a>
          <button type="button" className="btn btn-primary"
          onClick={() => guardaCategoria()}>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
