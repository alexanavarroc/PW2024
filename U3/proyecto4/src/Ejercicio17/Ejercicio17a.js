export default function Ejercicio17a({setPaquete}) {
    function GuardarDatos() {
        setPaquete(
         {
            'numeroGuia':document.getElementById('numeroGuia').value,
            'estatus':document.getElementById('estatus').value, 
            'actualizadoPor':document.getElementById('actualizadoPor').value
         }
        );
     }
     return(
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
                className="form-select"
                id="estatus"
                name="estatus"
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
                className="form-select"
                id="actualizadoPor"
                name="actualizadoPor"
                required
              >
                <option value="0">Seleccionar empleado...</option>
                <option value="100">Timmy</option>
                <option value="200">Maria</option>
                <option value="300">Anette</option>
              </select>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-lg">
                Guardar
              </button>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title">Estado</h5>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Número de Guía:
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Estatus:
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Actualizado Por:
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Fecha Actualizacion:
              </label>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-lg">
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
    
    