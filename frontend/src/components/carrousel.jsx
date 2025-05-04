// src/components/Carrousel.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigationType } from 'react-router-dom';
import Img1 from '../assets/Img1.jpg';
import Img4 from '../assets/Img4.jpg';
import LogoImage from '../assets/logoviny.png';

export default function Carrousel() {
    const images = [Img1, Img4];
    const [current, setCurrent] = useState(0);
    const navigationType = useNavigationType();

    // Delays según tipo de navegación
    const titleDelay = navigationType === 'PUSH' ? 0 : 1.9;
    const buttonDelay = navigationType === 'PUSH' ? 0 : 2.2;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            id="carrousel"
            className="relative w-full z-20 h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
        >
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <motion.img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={index === current ? { scale: 1 } : { scale: 1.1 }}
                        transition={{ duration: 8, ease: 'easeOut' }}
                    />
                </div>
            ))}

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-4 sm:space-y-6 md:space-y-8 text-center">
                {/* Logo imagen */}
                <motion.img
                    src={LogoImage}
                    alt="Sommelier"
                    className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: titleDelay, ease: 'easeOut' }}
                />

                {/* Botón Reservar Mesa */}
                <motion.button
                    className="
                        mt-4 sm:mt-6 md:mt-8
                        transform hover:scale-105 transition-transform duration-300
                        uppercase font-light
                        px-6 sm:px-8 md:px-10 lg:px-12
                        py-2 sm:py-3 md:py-4
                        text-white bg-black bg-opacity-55 border border-white
                        hover:bg-white hover:text-black hover:bg-opacity-75 hover:border hover:border-black
                    "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: buttonDelay }}
                >
                    Reservar Mesa
                </motion.button>

                {/* Botón Ver Carta */}
                <motion.button
                    className="
                        mt-2
                        transform hover:scale-105 transition-transform duration-300
                        uppercase font-light
                        px-6 sm:px-8 md:px-10 lg:px-12
                        py-2 sm:py-3 md:py-4
                        text-black bg-white bg-opacity-75 border border-black
                        hover:bg-black hover:text-white hover:bg-opacity-55
                    "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: buttonDelay + 0.2 }}
                >
                    Ver Carta
                </motion.button>
            </div>
        </section>
    );
}
