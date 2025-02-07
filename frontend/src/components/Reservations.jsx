// components/Reservations.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Reservations() {
    return (
        <section id="reservas" className="py-16 bg-gray-700">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Reservas
                </motion.h2>
                <p className="mb-4">Aquí puede realizar su reserva.</p>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors">
                    Realizar Reserva
                </button>
            </div>
        </section>
    );
}

export default Reservations;
