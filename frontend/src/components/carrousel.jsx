import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';
import Img4 from '../assets/Img4.jpg';

function Carrousel() {
    const images = [Img1, Img2, Img3, Img4];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="carrousel" className="relative w-full z-20 h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    <motion.img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        animate={index === current ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 5, ease: "easeInOut" }}
                    />
                </div>
            ))}

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-6 w-full text-center px-4 sm:px-6">
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center py-12 px-6 md:px-12"
                    style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.8)' }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.9 }}
                >
                    Sommelier
                </motion.h1>

                <motion.button
                    className="transform hover:scale-105 transition-transform duration-300 mt-8 text-white text-shadow uppercase py-4 text-base font-light px-10 border border-white bg-black bg-opacity-15 hover:bg-white hover:bg-opacity-15"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.2 }}
                >
                    Reservar Mesa
                </motion.button>
            </div>
        </section>
    );
}

export default Carrousel;
