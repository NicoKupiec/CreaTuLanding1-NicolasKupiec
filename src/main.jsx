import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Estilos generales
import './App.css';    // Estilos de la app
import App from './App.jsx';  // Para importar el componente principal

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);