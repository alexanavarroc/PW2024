import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
 
export default function ModalEliminarCategoria({
  mostrar,
  item,
  handleCerrar,
}) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
 
  const eliminaCategoria = async () => {
    try {
      // Hacer el request DELETE
      const response = await axios.delete(
        "https://localhost:7152/Muebleria/EliminaCategoria?idCategoriaEliminar=" +
          item.idCategoria,
      );
      if (response.status === 200) {
        navigate(0);
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
    <div>
      <div
        className={`modal ${mostrar ? "show" : ""}`}
        style={{ display: mostrar ? "block" : "none" }}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />{" "}
                Confirmar Eliminación
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCerrar}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input type="hidden" id="IdCategoria" />
                <div class="form-group">
                  <label for="Nombre">Nombre de Categoria</label>
                  <input
                    type="text"
                    readOnly
                    class="form-control"
                    id="Nombre"
                    value={item.nombre}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCerrar}
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-danger" onClick={ () => eliminaCategoria()}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
 
      {mostrar && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}