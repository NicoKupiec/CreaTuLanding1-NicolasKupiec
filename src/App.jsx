import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda de ropa. Proximamente incluiremos productos!" />
    </div>
  );
}

export default App;