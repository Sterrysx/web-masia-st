// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="text-2xl font-bold">SP</div>
                {/* Menú para pantallas medianas y grandes */}
                <div className="hidden md:flex">
                    <ul className="flex space-x-6 uppercase font-thin">
                        <li>
                            <Link
                                to="services"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-yellow-500 transition-colors"
                            >
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-yellow-500 transition-colors"
                            >
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-yellow-500 transition-colors"
                            >
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="reservas"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-yellow-500 transition-colors"
                            >
                                Reservas
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Botón para menú en móviles */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {/* Menú desplegable para móviles */}
            {isOpen && (
                <div className="md:hidden bg-gray-900">
                    <ul className="flex flex-col space-y-4 uppercase font-thin p-4">
                        <li>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to="services"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-yellow-500 transition-colors"
                            >
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to="about"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-yellow-500 transition-colors"
                            >
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-yellow-500 transition-colors"
                            >
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to="reservas"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-yellow-500 transition-colors"
                            >
                                Reservas
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
