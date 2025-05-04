import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function CookiePopup() {
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const accepted = localStorage.getItem("cookiesAccepted");
        if (accepted || location.pathname === "/cookies") return;
        const timer = setTimeout(() => setShowPopup(true), 3000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-light-gray p-6 rounded-lg shadow-xl text-dark-green max-w-md w-full text-center">
                <h2 className="text-2xl font-playfair text-secund mb-4">
                    🍪 Uso de Cookies
                </h2>
                <p className="mb-4">
                    Utilizamos cookies para mejorar tu experiencia. Lee nuestra{" "}
                    <Link to="/cookies" className="text-secund hover:underline">
                        Política de Cookies
                    </Link>
                    .
                </p>
                <button
                    onClick={handleAccept}
                    className="bg-nav text-light-gray font-semibold px-6 py-2 rounded-md hover:bg-secund transition"
                >
                    Aceptar Cookies
                </button>
            </div>
        </div>
    );
}
