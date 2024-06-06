import React from "react";
import { Link } from "react-router-dom";

export default function MiniaturaProductos({ productos, onSelect }) {
  return (
    <div id="productos" class="product-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 class="mb-4 section-title">
              Elaborados con excelentes materiales.
            </h2>
            <p class="mb-4">
              Adquiere con nosotros muebles online para tu hogar, como armarios
              y clósets, sillas para recámara, salas, tocadores, libreros, burós
              y cabeceras y mucho más.
            </p>
          </div>

          {productos.map((item) => {
            return (
              <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a class="product-item" href="#">
                  <img
                    src={`https://localhost:7010/UploadedFiles/${item.foto1}`}
                    class="img-fluid product-thumbnail"
                  />
                  <h3 class="product-title">{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  <Link
                    to={`/producto/${item.idProducto}`}
                    key={item.idProducto}
                  >
                    Ver mas...
                  </Link>
                  <br />
                  <strong class="product-price">${item.precio}</strong>

                  <span class="icon-cross">
                    <img src="images/cross.svg" class="img-fluid" />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
