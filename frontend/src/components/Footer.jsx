// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-footer text-gray-300 pt-8">
            {/* Separador de tres zonas */}
            <svg
                className="pointer-events-none absolute -top-24 left-0 w-full h-24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,40 C350,0 350,0 1000,140 C750,110 1050,90 1200,35 V180 H0 Z"
                    fill="rgba(145,82,75,1)"
                />
                <path
                    d="M0,60 C150,20 350,20 600,60 C850,100 1050,100 1200,60 V120 H0 Z"
                    fill="rgba(145,82,75,1)"
                />
            </svg>

            {/* Contenido principal */}
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Columna 1 */}
                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-lavish font-medium text-gray-300">
                        La Masia
                    </h2>
                    <p className="text-sm">
                        Cocina clásica catalana.
                    </p>
                    <div className="flex items-center space-x-2">
                        <FaInstagram className="text-gray-300 text-base" />
                        <a
                            href="https://instagram.com/restaurantmasia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:text-white"
                        >
                            @restaurantmasia
                        </a>
                    </div>
                </div>

                {/* Columna 2: Ubicación */}
                <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-playfair text-gray-300">
                        Ubicación
                    </h3>
                    <p className="text-sm">Cami de la Pineda, 98</p>
                    <p className="text-sm">Vacarisses, 08233 (Barcelona)</p>
                    <p className="text-sm">Tel: +34 683 379 643</p>
                    <p className="text-sm">Email: info@restaurantmasia.cat</p>
                    <Link
                        to="/"
                        className="inline-block mt-1 text-sm underline hover:text-white"
                    >
                        Ver mapa
                    </Link>
                </div>

                {/* Columna 3: Horario */}
                <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-playfair text-gray-300">
                        Horario
                    </h3>
                    <p className="text-sm">
                        <span className="font-medium">Lun–Vie:</span><br />13:00–16:00 &amp; 20:00–23:00
                    </p>
                    <p className="text-sm">
                        <span className="font-medium">Sáb:</span><br />13:00–23:00
                    </p>
                    <p className="text-sm">
                        <span className="font-medium">Dom:</span><br />13:00–17:00
                    </p>
                </div>

                {/* Columna 4: Acciones */}
                <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-playfair text-gray-300">
                        Contacto
                    </h3>
                    <Link
                        to="/contact"
                        className="block border border-gray-300 text-center py-2 text-sm uppercase hover:bg-gray-300 hover:text-dark-green transition"
                    >
                        Envía un mensaje
                    </Link>
                    <a
                        href="mailto:info@restaurantmasia.cat"
                        className="block border border-gray-300 text-center py-2 text-sm uppercase hover:bg-gray-300 hover:text-dark-green transition"
                    >
                        Email directo
                    </a>
                    <a
                        href="tel:+34683379643"
                        className="block border border-gray-300 text-center py-2 text-sm uppercase hover:bg-gray-300 hover:text-dark-green transition"
                    >
                        Llamar ahora
                    </a>
                </div>
            </div>

            {/* Pie legal a dos líneas, responsive */}
            <div className="bg-footer text-sm text-center py-6">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                    <p className="text-light-gray">
                        © 2025 La Masia. Todos los derechos reservados.
                        <span className="ml-1">Developed by Stellar Progress</span>
                    </p>
                    <nav className="space-x-4">
                        <Link to="/aviso-legal" className="hover:underline">
                            Aviso Legal
                        </Link>
                        <Link to="/politica-de-privacidad" className="hover:underline">
                            Política de Privacidad
                        </Link>
                        <Link to="/cookies" className="hover:underline">
                            Política de Cookies
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
