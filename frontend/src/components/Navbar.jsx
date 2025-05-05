// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import LogoImage from '../assets/logoviny.png'; // <- Import del logo en imagen
import carta from '../assets/Carta.pdf';


export default function Navbar() {
    const [isOpen, setIsOpen]   = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const [showNav, setShowNav] = useState(true);
    const lastScrollY           = useRef(0);
    const location              = useLocation();
    const isHome                = location.pathname === '/';

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu  = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setIsAtTop(currentY === 0);
            setShowNav(currentY <= lastScrollY.current || currentY < 100);
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeClass = 'text-white';

    return (
        <motion.nav
            initial={{ y: -120 }}
            animate={{ y: showNav ? 0 : -120 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
                isHome && isAtTop ? 'bg-transparent' : 'bg-nav'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between h-20 px-6 md:px-8">
                {isHome ? (
                    <>
                        {/* Logo a la izquierda */}
                        <NavLink to="/" onClick={closeMenu}>
                            <span className="text-2xl md:text-3xl font-medium text-gray-100 font-lavish">
                                Restaurant La Masia
                            </span>
                            {/*
                            <img
                                src={LogoImage}
                                alt="Sommelier Restaurant"
                                className="h-10 w-auto"
                            />*/}
                        </NavLink>

                        {/* Menú escritorio */}
                        <div className="hidden md:flex space-x-8 font-thin">
                            {[
                                { to: '/',      label: 'Inicio' },
                                { to: '/about', label: 'Nosotros' },
                                { to: '/contact', label: 'Contacto' },
                            ].map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `uppercase ${
                                            isActive ? activeClass : 'text-gray-100'
                                        } hover:text-dark-green`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                            <a
                                href={carta}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="uppercase text-gray-100 hover:text-dark-green"
                            >
                                La Carta
                            </a>
                            <button
                                type="button"
                                disabled
                                className="uppercase text-gray-100 hover:text-dark-green "
                            >
                                Reservas
                            </button>
                        </div>

                        {/* Hamburger móvil */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden flex flex-col justify-between h-2 w-6"
                        >
                            {isOpen ? (
                                <FaTimes size={24} className="text-white" />
                            ) : (
                                <>
                                    <span className="block w-full h-px bg-white" />
                                    <span className="block w-full h-px bg-white" />
                                </>
                            )}
                        </button>
                    </>
                ) : (
                    <>
                        {/* Hamburger izquierdo */}
                        <button
                            onClick={toggleMenu}
                            className="flex flex-col justify-between h-2 w-6 text-white"
                        >
                            {isOpen ? (
                                <FaTimes size={24} />
                            ) : (
                                <>
                                    <span className="block w-full h-px bg-white" />
                                    <span className="block w-full h-px bg-white" />
                                </>
                            )}
                        </button>

                        {/* Logo centrado */}
                        <NavLink
                            to="/"
                            onClick={closeMenu}
                            className="absolute left-1/2 transform -translate-x-1/2"
                        >

                            <span className="text-2xl font-medium text-gray-100 font-lavish">
                                La Masia
                            </span>
                            {/*
                            <img
                                src={LogoImage}
                                alt="Sommelier Restaurant"
                                className="h-10 w-auto"
                            />*/}
                        </NavLink>
                    </>
                )}
            </div>

            {/* Menú desplegable móvil / no-Home */}
            {isOpen && (
                <div className="bg-neutral-900 bg-opacity-95 py-4">
                    <ul className="container mx-auto px-6 md:px-8 space-y-6 font-thin">
                        {[
                            { to: '/',       label: 'Inicio' },
                            { to: '/about',  label: 'Nosotros' },
                            { to: '/contact',label: 'Contacto' },
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `block uppercase text-md ${
                                            isActive ? activeClass : 'text-gray-300'
                                        } hover:text-fondo`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <a
                                href={carta}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block uppercase text-md text-gray-300 hover:text-fondo"
                            >
                                La Carta
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                disabled
                                className="block uppercase text-md text-gray-100 hover:text-fondo"
                            >
                                Reservas
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </motion.nav>
    );
}
