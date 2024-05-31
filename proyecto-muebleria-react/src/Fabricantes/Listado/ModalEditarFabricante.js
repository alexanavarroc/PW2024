import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
 
export default function ModalEditarFabricante({ mostrar, item, handleCerrar }) {
  const navigate = useNavigate();
  const [FabricanteEditada, setFabricanteEditada] = useState({
    idFabricante: "",
    nombre: ""
  });
  const [error, setError] = useState(null);
 
  useEffect(() => {
    if (item) {
      setFabricanteEditada(item);
    }
  }, [item]);
 
  function actualizaFabricanteEnEstado(e) {
    setFabricanteEditada((prev) => ({ ...prev, nombre: e.target.value }));
  }
 
  const actualizaFabricante = async () => {
    try {
      const response = await axios.put(
        `https://localhost:7010/Muebleria/ActualizarFabricante?idFabricanteActualizar=${FabricanteEditada.idFabricante}&nombreActualizado=${FabricanteEditada.nombre}`
      );
      if (response.status === 200) {
        navigate(0);
      }
    } catch (error) {
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
                Editando Fabricante
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCerrar}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input type="hidden" id="IdFabricante" />
                <div className="form-group">
                  <label htmlFor="Nombre">Nombre de Fabricante</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Nombre"
                    onChange={actualizaFabricanteEnEstado}
                    value={FabricanteEditada.nombre}
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={actualizaFabricante}
              >
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
 