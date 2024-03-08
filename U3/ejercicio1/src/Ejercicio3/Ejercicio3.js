import './Ejercicio3.css'
export default function Ejercicio3(){
    return (
        <>
        <p className='letra'>De click al botón</p>
        <div className='centrar'>
           
        <button onClick={() => alert('Hiciste click :)')}
         type="button"
         className="btn btn-primary"
         >Aceptar</button>

        </div>
        

        </>
    );

}