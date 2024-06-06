import React from "react";
import Banner from "./Banner";
import MiniaturaProductos from "./MiniaturaProductos";

export default function Inicio({ productos, handleSelectProduct }) {
  return (
    <>
      <Banner />
      <MiniaturaProductos
        productos={productos}
        onSelect={handleSelectProduct}
      />
    </>
  );
}
