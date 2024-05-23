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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route path="/FabricantesListado" element={<FabricantesListado />} />
          <Route path="/CategoriasListado" element={<CategoriasListado />} />
          <Route path="/CategoriasListado/Nueva" element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
