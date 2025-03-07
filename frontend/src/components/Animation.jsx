import React, { useEffect, useState } from "react";
import logo from "../assets/LOGO/LOGO-STELLAR-LLETRES-PNG-BLANC.png";

export default function Animation() {
    // Controla el progreso de la barra (0 a 100)
    const [progress, setProgress] = useState(0);
    // Controla el estado de la animación de desvanecimiento
    const [fadeOut, setFadeOut] = useState(false);
    // Controla si el overlay (pantalla de carga) se muestra o no
    const [showAnimation, setShowAnimation] = useState(true);
    // Estado para animar el logo (efecto scale)
    const [logoScale, setLogoScale] = useState(0.95); // escala inicial algo más pequeña

    // Efecto para animar el logo al inicio (scale de 0.95 a 1)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLogoScale(1);
        }, 100); // demora corta para notar la animación
        return () => clearTimeout(timer);
    }, []);

    // Incrementa el progreso de la barra de carga
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 15); // Incrementa cada 15ms para que llegue a 100 en ~1.5 seg
        return () => clearInterval(interval);
    }, []);

    // Cuando la barra llega al 100%, iniciamos el fade out y un pequeño efecto en el logo
    useEffect(() => {
        if (progress === 100) {
            // Activamos el fade out del overlay
            setFadeOut(true);
            // Al finalizar, escalamos el logo un poco (efecto final)
            setLogoScale(1.1);
            const timer = setTimeout(() => {
                setShowAnimation(false);
            }, 400); // 400ms de transición
            return () => clearTimeout(timer);
        }
    }, [progress]);

    // Si showAnimation es false, el componente deja de renderizarse
    if (!showAnimation) {
        return null;
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center
                bg-black/90 z-50 transition-opacity duration-400
                ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
            {/* Logo con efecto scale */}
            <img
                src={logo}
                alt="LOGO"
                className="w-72 h-auto mb-4 transform transition-all duration-400"
                style={{ transform: `scale(${logoScale})` }}
            />

            {/* Barra de carga a pantalla completa y delgada */}
            <div className="w-full h-0.5 bg-gray-700 overflow-hidden">
                <div
                    className="h-full bg-gray-100"
                    style={{ width: `${progress}%` }} // Sin transición para seguir el estado exacto
                />
            </div>
        </div>
    );
}
