import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails({ agregarAlCarrito }) {
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    const obtenProducto = async () => {
      try {
        // Hacer el request GET
        const response = await axios.get(
          `https://localhost:7010/Productos/DameProducto?idProducto=${id}`,
        );
        // Actualizar el estado de datos
        setProductoSeleccionado(response.data);
        setCargando(false);
      } catch (error) {
        // En caso de error
        setError(error);
        setCargando(false);
      }
    };
    // llamar a la funcion
    obtenProducto();
  }, [id]);

  const cambiarCantidad = (e) => {
    setCantidad(e.target.value);
  };

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="product-details">
        <img
          src={`https://localhost:7152/UploadedFiles/${productoSeleccionado.foto1}`}
          alt={productoSeleccionado.nombre}
        />
        <img
          src={`https://localhost:7152/UploadedFiles/${productoSeleccionado.foto2}`}
          alt={productoSeleccionado.nombre}
        />
        <h2>{productoSeleccionado.nombre}</h2>
        <p>{productoSeleccionado.descripcion}</p>
        <p>
          Precio:{" "}
          {productoSeleccionado.precio
            ? `$${productoSeleccionado.precio}`
            : "No disponible"}
        </p>
        <label>
          Cantidad:
          <input
            type="number"
            value={cantidad}
            onChange={cambiarCantidad}
            min="1"
          />
        </label>
        <button
          onClick={() => agregarAlCarrito(productoSeleccionado, cantidad)}
        >
          Agregar al Carrito
        </button>
      </div>
    </>
  );
}
