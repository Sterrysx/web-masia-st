import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";

// Popup de cookies
import CookiePopup from "./pages/CookiePopup";

// Componentes de animación
import Animation from "./components/Animation"; // Overlay de carga inicial
import FadeIn from "./components/FadeIn";       // Efecto de aparición

function App() {
    return (
        <>
            {/* Pantalla de carga inicial (logo, barra de progreso) */}
            <Animation />

            <Router>
                <CookiePopup />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <FadeIn>
                                <Home />
                            </FadeIn>
                        }
                    />
                    <Route
                        path="/aviso-legal"
                        element={
                            <FadeIn>
                                <AvisoLegal />
                            </FadeIn>
                        }
                    />
                    <Route
                        path="/politica-de-privacidad"
                        element={
                            <FadeIn>
                                <Privacidad />
                            </FadeIn>
                        }
                    />
                    <Route
                        path="/politica-de-cookies"
                        element={
                            <FadeIn>
                                <Cookies />
                            </FadeIn>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
