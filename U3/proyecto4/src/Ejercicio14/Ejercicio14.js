import "./Ejercicio14.css";
import React, {useState} from 'react';

export default function Ejercicio14() {
    const[nombreRemitente , setNombre] = useState('');
    const[direccionRemitente , setDireccion] = useState('');
    const[nombreDestinatario , setDestinatario] = useState('');
    const[direccionDestinatario , setDirDest] = useState('');
    const[peso , setPeso] = useState('');

    function GuardarDatos(){
        const inputNombre = document.getElementById('nombreRemitente').value;
        const textAreaDireccion = document.getElementById('direccionRemitente').value;
        const inputNombreDestinatario = document.getElementById('nombreDestinatario').value;
        const textAreaDirDest = document.getElementById('direccionDestinatario').value;
        const inputPeso = document.getElementById('peso').value;
        
        setNombre(inputNombre);
        setDireccion(textAreaDireccion); 
        setDestinatario(inputNombreDestinatario); 
        setDirDest(textAreaDirDest); 
        setPeso(inputPeso); 


    }

    function Borrar(){
        const inputNombre = document.getElementById('nombreRemitente').value;
        const textAreaDireccion = document.getElementById('direccionRemitente').value;
        const inputNombreDestinatario = document.getElementById('nombreDestinatario').value;
        const textAreaDirDest = document.getElementById('direccionDestinatario').value;
        const inputPeso = document.getElementById('peso').value;
        
        setNombre(" ");
        setDireccion(" "); 
        setDestinatario(" "); 
        setDirDest(" "); 
        setPeso(" "); 


    }

  return (
    <div
      className="contenedor"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="tarjeta">
        <h2 className="text-center mb-4">Paqueteria Express</h2>
        <form className="paquete">
          <div className="mb-3 alinear">
            <label htmlFor="nombreRemitente" className="form-label">
              Nombre del Remitente:
            </label>
            <input id="nombreRemitente" type="text" className="form-control" />
          </div>
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="direccionRemitente" className="form-label">
              Dirección del Remitente:
            </label>
            <textarea id="direccionRemitente" className="form-control" />
          </div>
          <div className="mb-3 alinear">
            <label htmlFor="nombreDestinatario" className="form-label">
              Nombre del Destinatario:
            </label>
            <input
              id="nombreDestinatario"
              type="text"
              className="form-control"
            />
          </div>
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="direccionDestinatario" className="form-label">
              Dirección del Destinatario:
            </label>
            <textarea id="direccionDestinatario" className="form-control" />
          </div>
          <div className="mb-3 alinear">
            <label htmlFor="peso" className="form-label">
              Peso del Paquete (kg):
            </label>
            <input id="peso" type="number" className="form-control" />
          </div>
          <div className="text-center">
            <button onClick={() => GuardarDatos()} type="button" className="btn btn-warning btn-lg">
              Guardar Estados
            </button>
          </div>
        </form>
      </div>

      {/* TARJETA PAQUETE GUARDADO */}
      <div className="tarjeta">
        <h2 className="text-center mb-4">Paquete Guardado</h2>
        <div className="paquete">
          <div className="text-center">
            <div className="mb-3 alinear">
              <label className="form-label">Nombre del Remitente:</label>
              <p>{nombreRemitente}</p>
            </div>
            <div className="mb-3 alinear">
              <label className="form-label">Dirección del Remitente:</label>
              <p>{direccionRemitente}</p>
            </div>
            <div className="mb-3 alinear">
              <label className="form-label">Nombre del Destinatario:</label>
              <p>{nombreDestinatario}</p>
            </div>
            <div className="mb-3 alinear">
              <label className="form-label">Dirección del Destinatario:</label>
              <p>{direccionDestinatario}</p>
            </div>
            <div className="mb-3 alinear">
              <label className="form-label">Peso del Paquete (kg):</label>
              <p>{peso}</p>
            </div>
          </div>
          <button
           onClick={() => Borrar()}
            className="btn btn-warning btn-lg"
            style={{ width: "100%" }}
            type="button"
          >
            Borrar Estados
          </button>
        </div>
      </div>
    </div>
  );
}
