import React, {useState} from 'react';
export default function Ejercicio20a() {
    const [id, setId] = useState(0);

    function GuardarId(){
        setId(document.getElementById('idBuscar').value);
    }
    return (
      <div className="container">
        <div className="row">
          <div className="card mt-5">
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="idBuscar" className="form-label">
                          Id a Buscar
                        </label>
                        <input
                          onChange={() => GuardarId()}
                          type="text"
                          className="form-control"
                          id="idBuscar"
                        />
                      </div>
                      <a href={`/Ejercicio20b/${id}`} className="btn btn-primary">
                        Buscar
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  