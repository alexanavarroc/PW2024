import React from "react";
import "./sb-admin-2.css";
import BarraLateral from "../BarraLateral/BarraLateral";
import Contenidos from "../Contenidos/Contenidos";

export default function LayoutBase() {
  return (
    <>
      <div id="wrapper">
        <BarraLateral />
        <Contenidos />
      </div>

      {/* Boton scroll arriba */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
  );
}
