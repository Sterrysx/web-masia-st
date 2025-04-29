// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Animation from './components/Animation';
import CookiePopup from './pages/CookiePopup';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AvisoLegal from './pages/AvisoLegal';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';

function App() {
    return (
        <>
            {/* Pantalla de carga */}
            <Animation />

            <Router>
                {/* Popup de cookies disponible en todas las rutas */}
                <CookiePopup />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/aviso-legal" element={<AvisoLegal />} />
                    <Route path="/politica-de-privacidad" element={<Privacidad />} />
                    <Route path="/politica-de-cookies" element={<Cookies />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
