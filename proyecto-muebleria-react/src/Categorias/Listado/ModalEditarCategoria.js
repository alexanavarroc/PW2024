import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function ModalEditarCategoria({ mostrar, handleCerrar }) {
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
                  <input type="text" class="form-control" id="Nombre" />
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
              <button type="button" className="btn btn-primary">
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
