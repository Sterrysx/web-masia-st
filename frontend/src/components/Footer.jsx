// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
    return (
        <footer id="contact" className="py-8 bg-gray-800">
            <div className="container mx-auto px-6 text-center">
                <motion.p
                    className="text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    &copy; {new Date().getFullYear()} SP. Todos los derechos reservados.
                </motion.p>
                {/* Se pueden agregar íconos de redes sociales u otros enlaces aquí */}
            </div>
        </footer>
    );
}

export default Footer;
