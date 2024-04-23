import React from "react";
import { useParams } from "react-router-dom";

export default function Ejercicio20b() {
  const usuariosBD = [
    {
      idUsuario: 1,
      nombre: "Adan",
      edad: 21,
      rol: "admin",
      nacionalidad: "mexicano",
    },
    {
      idUsuario: 2,
      nombre: "Monica",
      edad: 25,
      rol: "estandar",
      nacionalidad: "argentino",
    },
    {
      idUsuario: 3,
      nombre: "Sara",
      edad: 22,
      rol: "invitado",
      nacionalidad: "estadounidense",
    },
  ];
  const {id} = useParams();

  const usuarioSeleccionado = usuariosBD.find(
    (item) => item.idUsuario === parseInt(id)
  );

  return (
    <div className="container">
      <div className="row">
        <div className="card mt-5">
          <div className="card-body">
            <div className="mb-5" style={{ marginTop: "15px" }}>
              <p>El id recibido es </p>
              <br />
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Campo</th>
                    <th scope="col">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-primary">
                    <td>idUsuario</td>
                    <td>{usuarioSeleccionado.idUsuario}</td>
                  </tr>
                  <tr className="table-secondary">
                    <td>nombre</td>
                    <td>{usuarioSeleccionado.nombre}</td>
                  </tr>
                  <tr className="table-info">
                    <td>edad</td>
                    <td>{usuarioSeleccionado.edad}</td>
                  </tr>
                  <tr className="table-danger">
                    <td>rol</td>
                    <td>{usuarioSeleccionado.rol}</td>
                  </tr>
                  <tr className="table-warning">
                    <td>nacionalidad</td>
                    <td>{usuarioSeleccionado.nacionalidad}</td>
                  </tr>
                </tbody>
              </table>
              <a className="btn btn-primary" href="/Ejercicio20a">
                Regresar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
