import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom'; // Importamos NavLink y useLocation
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/LOGO/LOGO-STELLAR-PNG-BLANC.png'; // Ruta correcta según tu estructura

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Detectamos la ruta actual

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Determina si estamos en la página de Home o en otra página (como Aviso Legal)
    const isHome = location.pathname === "/";

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 bg-opacity-95 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div>
                    <NavLink to="/">
                        <img src={logo} alt="Stellar Progress Logo" className="h-12 w-auto cursor-pointer" />
                    </NavLink>
                </div>

                {/* Menú para pantallas grandes */}
                <div className="hidden md:flex">
                    <ul className="flex space-x-6 font-thin text-white">
                        <li>
                            {isHome ? (
                                <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Inicio
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Inicio
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Servicios
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Servicios
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Quiénes somos
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Quiénes somos
                                </NavLink>
                            )}
                        </li>

                        <li>
                            {isHome ? (
                                <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Contacto
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Contacto
                                </NavLink>
                            )}
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
                <div className="md:hidden bg-gray-900 bg-opacity-90">
                    <ul className="flex flex-col space-y-4 font-thin p-4 text-white">
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} to="/" className="cursor-pointer hover:text-yellow-500 transition-colors">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} to="/" className="cursor-pointer hover:text-yellow-500 transition-colors">
                                Servicios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} to="/" className="cursor-pointer hover:text-yellow-500 transition-colors">
                                Quiénes somos
                            </NavLink>
                        </li>

                        <li>
                            <NavLink onClick={() => setIsOpen(false)} to="/" className="cursor-pointer hover:text-yellow-500 transition-colors">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
