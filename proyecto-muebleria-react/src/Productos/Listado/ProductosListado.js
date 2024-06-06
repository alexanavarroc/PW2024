import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
// import ModalEditarCategoria from "./ModalEditarCategoria";
// import ModalEliminarCategoria from "./ModalEliminarCategoria";

export default function ProductosListado() {
  const [muestraModalEditar, setMuestraModalEditar] = useState(false);
  const handleMuestraEdtiar = () => setMuestraModalEditar(true);
  const handleCierraEditar = () => setMuestraModalEditar(false);

  const [muestraModalEliminar, setMuestraModalEliminar] = useState(false);
  const handleMuestraEliminar = () => setMuestraModalEliminar(true);
  const handleCierraEliminar = () => setMuestraModalEliminar(false);

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [itemSeleccionado, setitemSelecionada] = useState({
    idCategoria: 0,
    nombre: "",
  });

  function editarCategoriaSeleccionada(item) {
    setitemSelecionada(item);
    handleMuestraEdtiar();
  }

  function eliminarCategoriaSeleccionada(item) {
    setitemSelecionada(item);
    handleMuestraEliminar();
  }

  useEffect(() => {
    const obtenListadoCategorias = async () => {
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
    obtenListadoCategorias();
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container-fluid">
      <h1>Listado de Productos</h1>
      <div style={{ textAlign: "right" }} className="mb-3">
        <a href="/Productos/Nuevo" className="btn btn-success">
          Nuevo Producto
        </a>
      </div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <table
          className="table table-bordered dataTable"
          id="dataTable"
          width="100%"
          cellSpacing="0"
          role="grid"
          aria-describedby="dataTable_info"
          style={{ width: "100%" }}
        >
          <thead>
            <tr role="row">
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Name: activate to sort column ascending"
                style={{ width: "10%" }}
              >
                Id
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ width: "20%" }}
              >
                Nombre
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ width: "10%" }}
              >
                Descripcion
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ width: "10%" }}
              >
                IdFabricante
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ width: "10%" }}
              >
                IdCategoria
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ width: "5%" }}
              >
                Precio
              </th>
              {/* <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ maxWidth: "5%" }}
              >
                Modelo 3D
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ maxWidth: "5%" }}
              >
                Foto 1
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ maxWidth: "5%" }}
              >
                Foto 2
              </th> */}
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ width: "30%", textAlign: "center" }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item) => {
              return (
                <tr key={item.idProducto} className="odd">
                  <td>{item.idProducto} </td>
                  <td>{item.nombre} </td>
                  <td style={{ maxWidth: "200px" }}>{item.descripcion} </td>
                  <td>{item.idFabricante} </td>
                  <td>{item.idCategoria} </td>
                  <td>${item.precio} </td>
                  {/* <td>{item.modelo3D} </td>
                  <td>{item.foto1} </td>
                  <td>{item.foto2} </td> */}
                  <td style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => editarCategoriaSeleccionada(item)}
                    >
                      <FontAwesomeIcon icon={faPencil} /> Editar
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarCategoriaSeleccionada(item)}
                    >
                      <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <ModalEditarCategoria
        mostrar={muestraModalEditar}
        item={itemSeleccionado}
        handleCerrar={handleCierraEditar}
      />
      <ModalEliminarCategoria
        mostrar={muestraModalEliminar}
        item={itemSeleccionado}
        handleCerrar={handleCierraEliminar}
      /> */}
    </div>
  );
}
