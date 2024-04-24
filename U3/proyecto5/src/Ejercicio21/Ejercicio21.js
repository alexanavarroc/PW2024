import { useEffect, useState } from "react";

export default function Ejercicio21() {
    const [miEstado, setMiEstado] = useState('');
    //useeffect con arreglo vacio se carga la primera vez :) s

    useEffect( () => {
        document.getElementById('miTextArea').value += 
        'UseEffect sin arreglo de dependendencias invocado \r\n';
    } , 
    [] );
//useEffect con arreglo de dependencia. 
    useEffect(() => {
        document.getElementById('miTextArea').value += 
        'invocado cuando el estado cambio a ' + miEstado +' \r\n';
    } , [miEstado] );

    function guardarEstado(){
        setMiEstado(document.getElementById('idBuscar').value);
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
                          Escriba algo para activar el useEffect...
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="idBuscar"
                          onChange={() => guardarEstado()}
                        />
                      </div>
                      <textarea id="miTextArea" cols={100} rows={20} />
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
  