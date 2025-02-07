// components/MissionPhilosophy.jsx
import React from 'react';
import { motion } from 'framer-motion';

const sections = [
    {
        id: 1,
        title: "Nuestro Reto",
        image: "/assets/images/business-discussion.jpg",
        text: "Ayudamos a digitalizar negocios locales de restauración para potenciar su crecimiento y éxito.",
    },
    {
        id: 2,
        title: "Nuestra Filosofía",
        image: "/assets/images/handshake.jpg",
        text: "Atención al detalle y compromiso son nuestros pilares, basados en la confianza y la perfección.",
    },
    {
        id: 3,
        title: "Servicios Clave",
        image: "/assets/images/business-meeting.jpg",
        text: "Ofrecemos una digitalización completa, soluciones personalizadas y herramientas avanzadas de gestión.",
    },
];

function MissionPhilosophy() {
    return (
        <section id="mission-philosophy" className="py-16 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map(section => (
                        <motion.div
                            key={section.id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={section.image} alt={section.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                <p className="flex-grow mb-4">{section.text}</p>
                                <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors">
                                    Contáctanos
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MissionPhilosophy;
