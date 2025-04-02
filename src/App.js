import "bootstrap/dist/css/bootstrap.min.css";
import Header from './pages/Header';
import Footer from './pages/Footer';
import Inicio from './pages/Inicio';
import Aretes from './pages/Accesorios/Aretes';
import Argollas from './pages/Accesorios/Argollas';
import Dijes from './pages/Accesorios/Dijes';
import Miyuki from './pages/Accesorios/Miyuki';
import Pulseras from './pages/Accesorios/Pulseras';
import SobreNosotros from './pages/SobreNosotros';
import CuadroFoto from "./elements/CuadroFoto";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <div className="d-flex flex-column text-light bg-dark min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Accesorios/Argollas" element={<Argollas />} />
          <Route path="/Accesorios/Aretes" element={<Aretes />} />
          <Route path="/Accesorios/Dijes" element={<Dijes />} />
          <Route path="/Accesorios/Miyuki" element={<Miyuki />} />
          <Route path="/Accesorios/Pulseras" element={<Pulseras />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
        </Routes>
        <div className="flex-row flex-grow-1">
        </div>
        <Footer />
      </div> 
      </BrowserRouter>
      
  );
}

export default App;
