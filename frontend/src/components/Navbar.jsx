import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const location = useLocation();
    const isHome = location.pathname === "/";

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            isHome && isAtTop
                ? "bg-gradient-to-b from-neutral-900 to-transparent"
                : "bg-neutral-900"
        }`}>
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <div>
                    <NavLink to="/">
                        <p className="inline-block text-2xl my-3 font-bold text-gray-200 transition-transform duration-300 hover:scale-110">
                            Sommelier Restaurant
                        </p>
                    </NavLink>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex space-x-6 font-thin text-white">
                        <li>
                            {isHome ? (
                                <Link
                                    to="carrousel"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
                                >
                                    Inicio
                                </Link>
                            ) : (
                                <NavLink to="/" onClick={closeMenu} className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                                    Inicio
                                </NavLink>
                            )}
                        </li>
                        <li>
                            <a
                                href="/ruta/a/la-carta.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
                            >
                                La Carta
                            </a>
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
                                >
                                    Nosotros
                                </Link>
                            ) : (
                                <NavLink to="/about" onClick={closeMenu} className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                                    Nosotros
                                </NavLink>
                            )}
                        </li>
                        <li>
                            <button type="button" onClick={() => { /* Sin acción */ }} className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                                Reservas
                            </button>
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
                                >
                                    Contacto
                                </Link>
                            ) : (
                                <NavLink to="/contact" onClick={closeMenu} className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                                    Contacto
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-white transition-transform duration-300 hover:scale-110">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-neutral-900 bg-opacity-90">
                    <ul className="flex flex-col space-y-4 font-thin p-4 text-white">
                        <li>
                            {isHome ? (
                                <Link
                                    to="carrousel"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
                                >
                                    Inicio
                                </Link>
                            ) : (
                                <NavLink to="/" onClick={closeMenu} className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                                    Inicio
                                </NavLink>
                            )}
                        </li>
                        <li>
                            <a
                                href="/ruta/a/la-carta.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
                            >
                                La Carta
                            </a>
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
                                >
                                    Nosotros
                                </Link>
                            ) : (
                                <NavLink to="/about" onClick={closeMenu} className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                                    Nosotros
                                </NavLink>
                            )}
                        </li>
                        <li>
                            <button type="button" onClick={() => { /* Sin acción */ }} className="inline-block cursor-not-allowed transition-transform duration-300 hover:scale-110">
                                Reservas
                            </button>
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-500}
                                    onClick={closeMenu}
                                    className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
                                >
                                    Contacto
                                </Link>
                            ) : (
                                <NavLink to="/contact" onClick={closeMenu} className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
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
