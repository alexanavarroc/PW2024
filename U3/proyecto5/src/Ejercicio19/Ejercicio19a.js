export default function Ejercicio19a() {
    return (
      <div className="container">
        <div className="row">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">
                Datos a enviar mediante
                <strong style={{ color: "red" }}>useRef </strong> a Ejercicio19b
              </h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre del Personaje
                  </label>
                  <input
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
                  <select id="habilidad">
                    <option disabled selected>
                      Seleccione una...
                    </option>
                    <option value="Medico">Medico</option>
                    <option value="Ingeniero">Ingeniero</option>
                    <option value="Explorador">Explorador</option>
                  </select>
                </div>
                <a href="" className="btn btn-primary">
                  Enviar
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }