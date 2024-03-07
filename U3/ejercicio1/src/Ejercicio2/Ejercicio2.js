import './Ejercicio2.css'
export default function Ejercicio2({nombre,año}){
    //regresa JSX
    return(
        <>
         <h1 className='Letra'>Bienvenido {nombre} </h1>
         <p className='Letra2'>Copyright {año}</p>
        </>
       
    );
}