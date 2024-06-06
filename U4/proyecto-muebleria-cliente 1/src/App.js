import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import LayoutBase from "./Shared/LayoutBase";
import Inicio from "./Inicio/Inicio";
import DetalleProducto from "./Producto/DetalleProducto";

const App = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [cantidad, setCantidad] = useState(0);

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState(() => {
    // Inicializar el carrito de compras desde localStorage
    const carritoGuardado = localStorage.getItem("carrito");
    const carritoParseado = JSON.parse(carritoGuardado);
    if (carritoParseado === null) {
      setCantidad(0);
    } else {
      setCantidad(
        carritoParseado.reduce(
          (total, producto) => total + producto.cantidad,
          0
        )
      );
    }
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  const handleProductoSeleccionado = (product) => {
    setProductoSeleccionado(product);
  };

  const handleAgregarAlCarrito = (producto, cantidad) => {
    const existingProduct = carrito.find(
      (item) => item.idProducto === producto.idProducto,
    );
    if (existingProduct) {
      setCarrito(
        carrito.map((item) =>
          item.idProducto === producto.idProducto
            ? { ...item, cantidad: item.cantidad + parseInt(cantidad) } // Actualiza cantidad
            : item,
        ),
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: parseInt(cantidad) }]); // Agrega
    }
    window.location.href = "/";
  };

  useEffect(() => {
    // Guardar el carrito de compras cada que encuentra cambios en el
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    //Hace el request de productos
    const obtenListadoProductos = async () => {
      try {
        // Hacer el request GET
        const response = await axios.get(
          "https://localhost:7010/Productos/ListadoProductos",
        );
        // Actualizar el estado de datos
        setProductos(response.data);
        setCargando(false);
      } catch (error) {
        // En caso de error
        setError(error);
        setCargando(false);
      }
    };
    // llamar a la funcion
    obtenListadoProductos();
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayoutBase cantidad={cantidad} />}>
            <Route
              path="/"
              element={
                <Inicio
                  productos={productos}
                  onSelect={handleProductoSeleccionado}
                />
              }
            />
            <Route
              path="/producto/:id"
              element={
                <DetalleProducto
                  product={productoSeleccionado}
                  agregarAlCarrito={handleAgregarAlCarrito}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
