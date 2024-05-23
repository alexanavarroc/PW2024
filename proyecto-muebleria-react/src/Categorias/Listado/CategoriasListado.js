import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalEditarCategoria from "./ModalEditarCategoria";
import ModalEliminarCategoria from "./ModalEliminarCategoria";

export default function CategoriasListado() {
  const [muestraModalEditar, setMuestraModalEditar] = useState(false);
  const handleMuestraEdtiar = () => setMuestraModalEditar(true);
  const handleCierraEditar = () => setMuestraModalEditar(false);

  const [muestraModalEliminar, setMuestraModalEliminar] = useState(false);
  const handleMuestraEliminar = () => setMuestraModalEliminar(true);
  const handleCierraEliminar = () => setMuestraModalEliminar(false);

  return (
    <div className="container-fluid">
      <h1>Listado de Categorias</h1>
      <div style={{ textAlign: "right" }} className="mb-3">
        <a href="/CategoriasListado/Nueva" className="btn btn-success">
          Nueva Categoria
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
            <tr className="odd">
              <td> </td>
              <td> </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-primary"
                  onClick={() => handleMuestraEdtiar()}
                >
                  <FontAwesomeIcon icon={faPencil} /> Editar
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleMuestraEliminar()}
                >
                  <FontAwesomeIcon icon={faTrash} /> Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalEditarCategoria
        mostrar={muestraModalEditar}
        handleCerrar={handleCierraEditar}
      />
      <ModalEliminarCategoria
        mostrar={muestraModalEliminar}
        handleCerrar={handleCierraEliminar}
      />
    </div>
  );
}
