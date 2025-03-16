// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id="contact" className="py-8 bg-neutral-900 z-50 text-gray-300">
            <div className="container mx-auto px-6 text-center">
                <motion.p
                    className="text-sm mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    &copy; {new Date().getFullYear()} Stellar Progress. Todos los derechos reservados.
                </motion.p>

                {/* Enlaces legales */}
                <div className="flex justify-center space-x-4 text-sm">
                    <Link to="/aviso-legal" className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                        Aviso Legal
                    </Link>
                    <Link to="/politica-de-privacidad" className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                        Política de Privacidad
                    </Link>
                    <Link to="/politica-de-cookies" className="inline-block cursor-pointer transition-transform duration-300 hover:scale-110">
                        Política de Cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
