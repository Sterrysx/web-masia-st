// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <section
            id="about"
            className="relative py-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/restaurant-interior.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    className="text-4xl font-bold uppercase mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    Sobre Nosotros
                </motion.h2>
                <motion.button
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Más Información
                </motion.button>
            </div>
        </section>
    );
}

export default About;
