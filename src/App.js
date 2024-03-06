import React from "react";
import {
  BrowserRouter  as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Amakha from "./pages/amakha";
import Salvica from "./pages/salvica";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco     
          <Route path="*" element={<div>404</div> } />*/}   
          <Route path="/amakhaParis" element={<Amakha />} />
          <Route path="/salvica" element={<Salvica />} />
      </Routes>
    </Router>
  );
}

export default App;

