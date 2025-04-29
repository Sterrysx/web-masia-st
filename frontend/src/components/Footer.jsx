// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative bg-neutral-900 text-gray-300">
            {/* Separador de tres zonas */}
            <svg
                className="pointer-events-none absolute -top-24 left-0 w-full h-24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                {/* 1) Banda semitransparente (70 %): empieza a Y=40 */}
                <path
                    d="
            M0,40
            C350,0 350,0 1000,140
            C750,110 1050,90 1200,35
            V180 H0 Z
          "
                    fill="rgba(31,41,55,0.7)"
                />

                {/* 2) Banda opaca: misma forma, 20 px más baja (empieza a Y=60) */}
                <path
                    d="
            M0,60
            C150,20 350,20 600,60
            C850,100 1050,100 1200,60
            V120 H0 Z
          "
                    fill="rgba(23,23,23,255)"
                />
            </svg>

            {/* Contenido del footer */}
            <div className="pt-24">
                <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Columna 1 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Sommelier Restaurant</h2>
                        <p className="text-gray-400">
                            Cocina de mercado con productos frescos de proximidad en Granollers.
                        </p>
                    </div>

                    {/* Columna 2 */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">Ubicación</h3>
                        <p>Passeig de la Muntanya, 2</p>
                        <p>08402 Granollers (Barcelona)</p>
                        <p className="flex items-center">
                            Tel: <span className="ml-2">938 41 85 80</span>
                        </p>
                        <Link
                            to="/"
                            className="inline-block mt-2 text-yellow-500 underline hover:text-yellow-400"
                        >
                            Ver mapa
                        </Link>
                    </div>

                    {/* Columna 3 */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">Horario</h3>
                        <p>
                            <span className="font-medium">De lunes a viernes:</span><br />
                            07:00 a 17:00
                        </p>
                        <p>
                            <span className="font-medium">Viernes:</span><br />
                            20:00 a 00:00
                        </p>
                        <p>
                            <span className="font-medium">Sábados:</span><br />
                            10:00 a 17:00
                        </p>
                    </div>

                    {/* Columna 4 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Contacto</h3>
                        <a
                            href="mailto:info@sommelier.com"
                            className="block border border-gray-500 text-center py-2 uppercase hover:bg-gray-800 transition"
                        >
                            Email
                        </a>
                        <a
                            href="tel:938418580"
                            className="block border border-gray-500 text-center py-2 uppercase hover:bg-gray-800 transition"
                        >
                            Teléfono: 93 841 85 80
                        </a>
                        <button className="w-full bg-yellow-500 text-white py-2 uppercase hover:bg-yellow-600 transition">
                            Reservar
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
