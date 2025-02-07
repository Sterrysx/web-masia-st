// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative">
            <motion.h1
                className="text-5xl md:text-7xl font-thin uppercase text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Su Éxito Essss Nuestro Compromiso.
            </motion.h1>
        </section>
    );
}

export default Hero;
