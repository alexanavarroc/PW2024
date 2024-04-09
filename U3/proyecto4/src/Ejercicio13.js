import React, {useState} from 'react';

export default function Ejercicio13(){
    //crear el estado mensaje
    const [mensaje, setMensaje] = useState(''); // valor inicial string vacio ''

    function GuardaMensajeEnEstado(){
        let txtMensaje = document.getElementById('mensaje').value; // leer el valor en la caja de texto
        setMensaje(txtMensaje); // guardar el estado
    }

    return(
        <>
        <label htmlFor="Mensaje">Escriba su mensaje </label>
        <input type="text" id="mensaje" />
        <input type="button" value="Guardar Estado" 
        onClick={() => GuardaMensajeEnEstado()}
        />
        <p>El estado es: {mensaje} </p>
        </>
    );
}