import { useState } from "react";

const productos = [
  { id: 1, nombre: "Pantalón Jean" },
  { id: 2, nombre: "Camisa Denim" },
  { id: 3, nombre: "Remera Clásica" },
  { id: 4, nombre: "Zapatillas Urbanas" }
];

//Normaliza texto (eliminar acentos y convertir a minúsculas
const normalizarTexto = (texto) => {
  return texto
    .toLowerCase() 
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const ItemListContainer = ({ mensaje, searchTerm }) => {
  // Filtra productos según la búsqueda, con la función de normalización
  const productosFiltrados = productos.filter((producto) =>
    normalizarTexto(producto.nombre).includes(normalizarTexto(searchTerm))
  );

  return (
    <div className="item-list-container">
      <h2>{mensaje}</h2>
      <ul>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <li key={producto.id}>{producto.nombre}</li>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </ul>
    </div>
  );
};

export default ItemListContainer;