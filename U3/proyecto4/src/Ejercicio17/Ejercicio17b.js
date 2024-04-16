export default function Ejercicio17b({pkg, setPaquete}) {
    function Borrar(){
        setPaquete(
            {
                numeroGuia:'',
                estatus:'',
                actualizadoPor:'',
                
            }
           );

    }
    
    return(
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
    );
}
