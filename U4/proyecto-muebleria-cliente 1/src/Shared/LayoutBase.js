import React from "react";
import { Outlet } from "react-router-dom";
import Navegacion from "./Navegacion";

export default function LayoutBase({ cantidad }) {
  return (
    <>
      <Navegacion cantidad={cantidad} />
      <Outlet />
    </>
  );
}
