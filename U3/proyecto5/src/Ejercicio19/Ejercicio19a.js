import React, {useState} from "react";
export default function Ejercicio19a() {
  const [nombre, setNombre] = useState('');
  const [habilidad, setHabilidad] = useState('');

  function GuardarNombre() {
    const nombre = document.getElementById('nombre').value;
    setNombre(nombre);
  }
  
  function GuardarHabilidad() {
    setHabilidad(document.getElementById('habilidad').value);
  }

    return (
      <div className="container">
        <div className="row">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">
                Datos a enviar mediante
                <strong style={{ color: "red" }}> useParams </strong> a Ejercicio19b
              </h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre del Personaje
                  </label>
                  <input
                    onChange={() => GuardarNombre()}
                    type="text"
                    className="form-control"
                    id="nombre"
                    style={{ maxWidth: "200px" }}
                  />
                  <br />
                  <label htmlFor="habilidad" className="form-label">
                    Habilidad
                  </label>
                  <br />
                  <select id="habilidad"
                  onChange={() => GuardarHabilidad()}>
                    <option disabled selected>
                      Seleccione una...
                    </option>
                    <option value="Medico">Medico</option>
                    <option value="Ingeniero">Ingeniero</option>
                    <option value="Explorador">Explorador</option>
                  </select>
                </div>
                <a href={`/ejercicio19b/${nombre}/${habilidad}`} className="btn btn-primary">
                  Enviar
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }