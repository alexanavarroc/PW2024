import React, { useState } from "react";
import axios from "axios";

export default function Producto() {
  const [nombreAgregar, setNombreAgregar] = useState("");
  const [descripcionAgregar, setDescripcionAgregar] = useState("");
  const [idFabricanteAgregar, setIdFabricanteAgregar] = useState("");
  const [idCategoriaAgregar, setIdCategoriaAgregar] = useState("");
  const [precioAgregar, setPrecioAgregar] = useState("");
  const [archivos, setArchivos] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setArchivos(event.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombreAgregar", nombreAgregar);
    formData.append("descripcionAgregar", descripcionAgregar);
    formData.append("idFabricanteAgregar", idFabricanteAgregar);
    formData.append("idCategoriaAgregar", idCategoriaAgregar);
    formData.append("precioAgregar", precioAgregar);

    Array.from(archivos).forEach((archivo) => {
      formData.append("files", archivo);
    });

    try {
      const response = await axios.post(
        "https://localhost:7152/Productos/AgregaProducto",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setMessage("Guardado Correctamente");
      console.log(response.data);
    } catch (error) {
      setMessage("Error al guardar nuevo producto");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Nuevo Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombreAgregar}
            onChange={(e) => setNombreAgregar(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcionAgregar}
            onChange={(e) => setDescripcionAgregar(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Id Fabricante:</label>
          <input
            type="number"
            value={idFabricanteAgregar}
            onChange={(e) => setIdFabricanteAgregar(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Id Categoría:</label>
          <input
            type="number"
            value={idCategoriaAgregar}
            onChange={(e) => setIdCategoriaAgregar(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            step="0.01"
            value={precioAgregar}
            onChange={(e) => setPrecioAgregar(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Archivos:</label>
          <input type="file" multiple onChange={handleFileChange} />
        </div>
        <button type="submit">Agregar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
