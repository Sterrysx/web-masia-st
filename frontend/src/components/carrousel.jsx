// src/components/Carrousel.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ft7 from '../assets/7.jpeg';
import carta from '../assets/carta.pdf';


export default function Carrousel() {
    // Retrasos de animación
    const titleDelay = 1.5;
    const buttonDelay = 2.2;

    // Props comunes para los botones
    const btnHoverTap = {
        whileHover: { scale: 1.05 },
        whileTap:   { scale: 0.95 },
        transition:{ type: 'spring', stiffness: 300 }
    };

    return (
        <section
            id="carrousel"
            className="relative w-full z-20 h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
        >
            {/* Imagen de fondo con zoom continuo */}
            <motion.img
                src={ft7}
                alt="Slide único"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{
                    duration: 10,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-4 sm:space-y-6 md:space-y-8 text-center">
                <motion.h1
                    className="text-6xl lg:text-9xl font-medium text-white font-lavish drop-shadow-2xl"
                    style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: titleDelay, ease: 'easeOut' }}
                >
                    La Masia
                </motion.h1>

                <motion.button
                    className="
            mt-4 sm:mt-6 md:mt-8
            uppercase font-light
            px-6 sm:px-8 md:px-10 lg:px-12
            py-2 sm:py-3 md:py-4
            text-white bg-nav bg-opacity-55 border border-white
            hover:bg-white hover:text-black hover:bg-opacity-75 hover:border-black
            transition-colors duration-300
          "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: buttonDelay }}
                    {...btnHoverTap}
                >
                    Reservar Mesa
                </motion.button>

                <motion.a
                    href={carta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    mt-2
    uppercase font-light
    px-6 sm:px-8 md:px-10 lg:px-12
    py-2 sm:py-3 md:py-4
    text-black bg-white bg-opacity-75 border border-black
    hover:bg-nav hover:text-white hover:bg-opacity-55 hover:border-white
    transition-colors duration-300
  "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: buttonDelay + 0.2 }}
                    {...btnHoverTap}
                >
                    Ver Carta
                </motion.a>
            </div>
        </section>
    );
}
