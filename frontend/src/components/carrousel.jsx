// src/components/Carrousel.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigationType } from 'react-router-dom';
import Img1 from '../assets/Img1.jpg';
import Img4 from '../assets/Img4.jpg';
import LogoImage from '../assets/logoviny.png'; // <- Descomenta para usar logo en imagen

export default function Carrousel() {
    const images = [Img1, Img4];
    const [current, setCurrent] = useState(0);
    const navigationType = useNavigationType(); // 'PUSH' vs 'POP'

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
            className="relative w-full z-20 h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
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

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-6 w-full text-center px-4 sm:px-6">
                {/* Logo en formato texto (activo)
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center py-12 px-6 md:px-12"
                    style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.8)' }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: titleDelay }}
                >
                    Sommelier
                </motion.h1>
                */}

                {/* Logo en formato imagen (inactivo) */}

                <motion.img
                    src={LogoImage}
                    alt="Sommelier"
                    className="h-16 w-auto py-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: titleDelay }}
                />


                <motion.button
                    className="transform hover:scale-105 transition-transform duration-300 mt-8 text-white text-shadow uppercase py-4 text-base font-light px-10 border border-white bg-black bg-opacity-25 hover:bg-white hover:bg-opacity-15"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: buttonDelay }}
                >
                    Reservar Mesa
                </motion.button>
            </div>
        </section>
    );
}
