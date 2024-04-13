import React, {useState} from 'react';
import "./EstilosEjercicio18.css";
import Ejercicio18a from "./Ejercicio18a";
import Ejercicio18b from "./Ejercicio18b";

export default function Ejercicio18() {
    const [paquete, setPaquete] = useState(
        {
            nombreRemitente:'',
            direccionRemitente:'',
            nombreDestinatario:'',
            direccionDestinatario:'',
            peso: 0,
        }
    );
  return (
    <div
      className="contenedor"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Ejercicio18a setPaquete={setPaquete} />
      <Ejercicio18b pkg={paquete} setPaquete={setPaquete} />
    </div>
  );
}
