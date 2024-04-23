import { useParams } from 'react-router-dom';

export default function Ejercicio19b() {
  const { nombre, habilidad } = useParams();
    return (
      <div className="container">
        <div className="row">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">Datos a recibidos mediante useRef</h5>
              <div className="mb-3">
                <p>{nombre}</p>
                <p>{habilidad}</p>
              </div>
              <a className="btn btn-primary" href="/ejercicio19a">
                Regresar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }