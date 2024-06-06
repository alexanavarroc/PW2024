import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function BarraLateral() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon
              icon={faLayerGroup}
              size="3x"
              style={{ color: "#22be84" }}
            />{" "}
          </div>
          <div className="sidebar-brand-text mx-3">ADMIN MUEBLERIA</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">CATALOGOS</div>
        {/* Opciones de menu (por lo pronto tiene dos opciones) */}
        <li className="nav-item">
          <a className="nav-link" href="/CategoriasListado">
            <i className="fas fa-fw fa-folder"></i>
            <span>Categorias</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/FabricantesListado">
            <i className="fas fa-fw fa-folder"></i>
            <span>Fabricantes</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ProductosListado">
            <i className="fas fa-fw fa-box"></i>
            <span>Productos</span>
          </a>
        </li>
        
        {/* Mensaje de barra lateral */}
        <div className="sidebar-card d-none d-lg-flex mt-5">
          <p className="text-center mb-2">
            <strong>Proyecto Muebleria</strong> Programacion Web{" "}
          </p>
          <p className="text-center mb-2">Enero - Junio 2024</p>
          <p className="text-center mb-2">
            Ingenieria en Sistemas Computacionales
          </p>
        </div>
      </ul>
    </>
  );
}
