export default function Ejercicio4b({alert, tipoA}){
    return(
        <>
        <div className={tipoA} role="alert">
        {alert}
        </div>
        </>
    );
}