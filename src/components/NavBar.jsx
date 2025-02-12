import { useState } from "react";
import CartWidget from "./CartWidget";

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  return (
    <nav className="navbar">
      {/* Logo a la izquierda */}
      <div className="navbar-left">
        <h1 className="logo">NI NO KUNI</h1>
      </div>

      {/* Barra de búsqueda + enlaces de navegación */}
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>

      {/* Carrito a la derecha */}
      <div className="navbar-right">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;