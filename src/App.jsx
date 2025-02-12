import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado de búsqueda

  return (
    <div className="App">
      <NavBar onSearch={setSearchTerm} />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda de ropa!" searchTerm={searchTerm} />
    </div>
  );
}

export default App;