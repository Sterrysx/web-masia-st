// components/CookiePopup.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CookiePopup() {
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation(); // 📌 Detectamos en qué página está el usuario

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");

        // 📌 Si ya aceptó las cookies, el popup nunca se muestra
        if (cookiesAccepted) {
            setShowPopup(false);
            return;
        }

        // 📌 Si está en la página de política de cookies, no mostramos el popup
        if (location.pathname === "/politica-de-cookies") {
            setShowPopup(false);
        } else {
            setShowPopup(true);
        }
    }, [location.pathname]); // 📌 Se ejecuta cada vez que cambia la URL

    const handleAcceptCookies = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setShowPopup(false);
    };

    if (!showPopup) return null; // No renderiza nada si ya se aceptaron las cookies o si está en "Política de Cookies"

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-700 bg-opacity-90 text-gray-200 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-xl font-bold text-yellow-500 mb-4">
                    🍪 Uso de Cookies
                </h2>
                <p className="text-sm mb-4">
                    Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al aceptar,
                    nos ayudas a ofrecerte un servicio mejor. Puedes leer más en nuestra
                    <a
                        href="/politica-de-cookies"
                        onClick={() => setShowPopup(false)} // 📌 Cierra el popup al hacer clic en el enlace
                        className="text-yellow-400 hover:underline"
                    >  Política de Cookies</a>.
                </p>
                <button
                    onClick={handleAcceptCookies}
                    className="bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
                >
                    Aceptar Cookies
                </button>
            </div>
        </div>
    );
}
