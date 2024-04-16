import React, {useState} from 'react';
import "./EstilosEjercicio17.css";
import Ejercicio17a from "./Ejercicio17a";
import Ejercicio17b from "./Ejercicio17b";

export default function Ejercicio17() {
    const [paquete, setPaquete] = useState(
        {
            numeroGuia:'',
            estatus:'',
            actualizadoPor:''
        }
    );
  return (
    <div
      className="contenedor"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Ejercicio17a setPaquete={setPaquete} />
      <Ejercicio17b pkg={paquete} setPaquete={setPaquete} />
    </div>
  );
}
