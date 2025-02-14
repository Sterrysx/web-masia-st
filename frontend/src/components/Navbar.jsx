import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/LOGO/LOGO-STELLAR-PNG-BLANC.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 bg-opacity-95 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <div>
                    <NavLink to="/">
                        <img src={logo} alt="Stellar Progress Logo" className="h-12 w-auto cursor-pointer" />
                    </NavLink>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex space-x-6 font-thin text-white">
                        <li>
                            {isHome ? (
                                <Link to="hero" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Inicio
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors" onClick={closeMenu}>
                                    Inicio
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link to="services" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Servicios
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors" onClick={closeMenu}>
                                    Servicios
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link to="about" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Quiénes somos
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors" onClick={closeMenu}>
                                    Quiénes somos
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link to="contact" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Contacto
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors" onClick={closeMenu}>
                                    Contacto
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-90">
                    <ul className="flex flex-col space-y-4 font-thin p-4 text-white">
                        <li>
                            {isHome ? (
                                <Link to="hero" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Inicio
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors" onClick={closeMenu}>
                                    Inicio
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link to="services" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Servicios
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors" onClick={closeMenu}>
                                    Servicios
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link to="about" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Quiénes somos
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors" onClick={closeMenu}>
                                    Quiénes somos
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link to="contact" smooth={true} duration={500} offset={-500} onClick={closeMenu} className="cursor-pointer hover:text-yellow-500 transition-colors">
                                    Contacto
                                </Link>
                            ) : (
                                <NavLink to="/" className="cursor-pointer hover:text-yellow-500 transition-colors" onClick={closeMenu}>
                                    Contacto
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
