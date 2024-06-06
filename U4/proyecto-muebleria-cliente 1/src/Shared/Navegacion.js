import React from "react";

export default function Navegacion({ cantidad = 0 }) {
  return (
    <nav
      class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div class="container">
        <a class="navbar-brand" href="/">
          PW Muebleria<span>.</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsFurni">
          <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li>
              <a class="nav-link" href="http://localhost:3001/#productos">
                Productos
              </a>
            </li>
            <li>
              <a class="nav-link" href="/AcercaDe">
                Acerca De
              </a>
            </li>
          </ul>

          <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a class="nav-link" href="Carrito">
                <img src="http://localhost:3001/images/cart.svg" />
                <p>{cantidad}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
