import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
 
export default function ModalEditarCategoria({ mostrar, item, handleCerrar }) {
  const navigate = useNavigate();
  const [categoriaEditada, setCategoriaEditada] = useState({});
  const [error, setError] = useState(null);
 
  useEffect(() => {
    setCategoriaEditada(item);
  }, [item]);
 
  function actualizaCategoriaEnEstado(e) {
    setCategoriaEditada((prev) => ({ ...prev, nombre: e.target.value }));
  }
 
  const actualizaCategoria = async () => {
    try {
      // Hacer el request PUT
      const response = await axios.put(
        "https://localhost:7152/Muebleria/ActualizarCategoria?idCategoriaActualizar=" +
          categoriaEditada.idCategoria +
          "&nombreActualizado=" +
          categoriaEditada.nombre,
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
                <FontAwesomeIcon icon={faPencil} style={{ color: "blue" }} />{" "}
                Editando Categoria
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
                  <input type="text" class="form-control" id="Nombre" value={categoriaEditada.nombre} onChange={(e) => actualizaCategoriaEnEstado(e)} />
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
              <button type="button" className="btn btn-primary" onClick={() => actualizaCategoria()}>
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>
 
      {mostrar && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
