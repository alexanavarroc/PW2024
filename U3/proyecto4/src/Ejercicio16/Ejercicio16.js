import "./EstilosEjercicio16.css";
import React, {useState} from 'react';

export default function Ejercicio16() {
  
  const [paquete, setPaquete] = useState(
    {
        numeroGuia: '',
        statusPaquete: '',
        actualizadoPor: '',
        fecha: '',

    }
)

    function GuardarDatos(e){
      const {name, value} = e.target;
      setPaquete(
      {
          ...paquete, 
          [name]:value,
          fecha: Date()
      }
      )
    }

    function Borrar(){
      setPaquete(
          {
            numeroGuia: '',
            statusPaquete: '',
            actualizadoPor: '',
          }
      )

    }

  return (
    <div
      className="contenedor"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Detalles del Envío</h5>
          <div className="mb-3">
            <label htmlFor="numeroGuia" className="form-label">
              Número de Guía:
            </label>
            <input
              onChange={(e) => GuardarDatos(e)}
              type="text"
              className="form-control"
              id="numeroGuia"
              name="numeroGuia"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="estatus" className="form-label">
              Estatus del Paquete:
            </label>
            <select
              onChange={(e) => GuardarDatos(e)}
              className="form-select"
              id="estatus"
              name="statusPaquete"
              required
            >
              <option value="0">Seleccionar estado...</option>
              <option value="1">Preparando</option>
              <option value="2">Salio de Bodega</option>
              <option value="3">En Transito</option>
              <option value="4">Proximo a Entregar</option>
              <option value="5">Entregado</option>
              <option value="6">No se Pudo Entregar</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="actualizadoPor" className="form-label">
              Actualizado Por:
            </label>
            <select
              onChange={(e) => GuardarDatos(e)}
              className="form-select"
              id="actualizadoPor"
              name="actualizadoPor"
              required
            >
              <option value="0">Seleccionar empleado...</option>
              <option value="100">Timmy</option>
              <option value="200">Maria</option>
              <option value="300">Anette</option>
              <option value="300">Daniel</option>
              <option value="300">lexie</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "300px", height: "300px" }}>
        <div className="card-body">
          <h5 className="card-title">Estado</h5>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Número de Guía: {paquete.numeroGuia}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Estatus: {paquete.statusPaquete}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Actualizado Por: {paquete.actualizadoPor}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Fecha Actualizacion:{paquete.fecha}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
