import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalEditarFabricantes from "./ModalEditarFabricante";
import ModalEliminarFabricantes from "./ModalEliminarFabricante";
 
export default function FabricanteListado() {
  const [muestraModalEditar, setMuestraModalEditar] = useState(false);
  const handleMuestraEditar = () => setMuestraModalEditar(true);
  const handleCierraEditar = () => setMuestraModalEditar(false);
 
  const [muestraModalEliminar, setMuestraModalEliminar] = useState(false);
  const handleMuestraEliminar = () => setMuestraModalEliminar(true);
  const handleCierraEliminar = () => setMuestraModalEliminar(false);
 
  const [fabricantes, setFabricantes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
 
  const [itemSeleccionado, setitemSelecionado] = useState({
    idCategoria: 0,
    nombre: "",
  });
 
  useEffect(() => {
    const obtenListadoFabricantes = async () => {
      try {
        // Hacer el request GET
        const response = await axios.get(
          "https://localhost:7010/Muebleria/ListadoFabricantes",
        );
        // Actualizar el estado de datos
        setFabricantes(response.data);
        setCargando(false);
      } catch (error) {
        // En caso de error
        setError(error);
        setCargando(false);
      }
    };
    // llamar a la funcion
    obtenListadoFabricantes();
  }, []);
 
  if (cargando) {
    return <div>Cargando...</div>;
  }
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }
 
  function eliminarFabricanteSeleccionado(item) {
    setitemSelecionado(item);
    handleMuestraEliminar();
  }
 
  function editarFabricanteSeleccionado(item) {
    setitemSelecionado(item);
    handleMuestraEditar();
  }
  return (
    <div className="container-fluid">
      <h1>Listado de Fabricantes</h1>
      <div style={{ textAlign: "right" }} className="mb-3">
        <a href="/FabricantesListado/Nueva" className="btn btn-success">
          Nuevo Fabricante
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
                style={{ width: "60%" }}
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
                style={{ width: "30%", textAlign: "center" }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {fabricantes.map((item) => {
                return (
                  <tr className="odd">
                    <td>{item.idFabricante}</td>
                    <td>{item.nombre}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        className="btn btn-primary"
                        onClick={() => editarFabricanteSeleccionado(item)}
                      >
                        <FontAwesomeIcon icon={faPencil} /> Editar
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => eliminarFabricanteSeleccionado(item)}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })
            }
           
          </tbody>
        </table>
      </div>
      <ModalEditarFabricantes
        mostrar={muestraModalEditar}
        item={itemSeleccionado}
        handleCerrar={handleCierraEditar}
      />
      <ModalEliminarFabricantes
        mostrar={muestraModalEliminar}
        item={itemSeleccionado}
        handleCerrar={handleCierraEliminar}
      />
    </div>
  );
}