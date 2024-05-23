import React from "react";
import NavegacionSuperior from "./NavegacionSuperior";
import { Outlet } from "react-router-dom";

export default function Contenidos() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <NavegacionSuperior />
        <Outlet />
      </div>
    </div>
  );
}
