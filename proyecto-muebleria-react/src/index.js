import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LayoutBase from "./Shared/LayoutBase/LayoutBase";
import CategoriasListado from "./Categorias/Listado/CategoriasListado";
import FabricantesListado from "./Fabricantes/Listado/FabricantesListado";

import Categoria from "./Categorias/Nueva/Categoria";
import Fabricante from "./Categorias/Nueva/Fabricante";
import Producto from "./Productos/Nuevo/Producto";
import ProductosListado from "./Productos/Listado/ProductosListado";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route path="/FabricantesListado" element={<FabricantesListado />} />
          <Route path="/CategoriasListado" element={<CategoriasListado />} />
          <Route path="/FabricantesListado/Nueva" element={<Fabricante />} />
          
          <Route path="/CategoriasListado/Nueva" element={<Categoria />} />
          <Route path="/Productos/Nuevo" element={<Producto />} />
          <Route path="/ProductosListado" element={<ProductosListado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
