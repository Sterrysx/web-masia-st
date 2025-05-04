// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import contactoImage from '../assets/rest1.jpg';

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: '',
        privacy: false,
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.from_name || !formData.email || !formData.message || !formData.privacy) {
            setStatusMessage('❌ Por favor, completa todos los campos y acepta la política.');
            return;
        }
        // Aquí tu lógica de envío (emailjs u otra)
        setStatusMessage('✅ ¡Mensaje enviado con éxito!');
        setFormData({ from_name: '', email: '', message: '', privacy: false });
    };

    return (
        <>
            <Navbar />

            {/* Añadido pb-24 para dejar espacio al footer */}
            <main className="mb-4">
                {/* Sección 1: Visítanos + Mapa */}
                <section className="bg-white mt-32 py-16">
                    <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
                        {/* Texto */}
                        <div className="space-y-4">
                            <h2 className="text-5xl font-playfair">VISÍTANOS</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Descubre la exquisitez en el corazón de Meloneras. Visítanos y disfruta de la fusión de sabores únicos en el Restaurante La Sirena. ¡Sabor, elegancia y atmósfera inolvidable!
                            </p>
                            <h3 className="text-sm font-bold text-yellow-500 uppercase">MELONERAS</h3>
                            <address className="not-italic text-gray-800 mb-4">
                                Calle Mar Mediterráneo 3 –<br/>
                                C.C. Boulevard Oasis
                            </address>
                            <p className="flex items-center text-gray-800">
                                <FaPhone className="mr-2" /> +34 928 140540
                            </p>
                            <p className="flex items-center text-gray-800">
                                <FaEnvelope className="mr-2" /> info@lasirenameloneras.es
                            </p>
                        </div>

                        {/* Google Maps */}
                        <div className="w-full h-96 shadow-lg overflow-hidden rounded-lg">
                            <iframe
                                title="Mapa Restaurante La Sirena"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d527.3668500050912!2d2.285082837254212!3d41.60737766431357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1745914213552!5m2!1sen!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>

                {/* Sección 2: Foto + Formulario */}
                <section className="bg-yellow-50 py-16 pb-24">
                    <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
                        {/* Foto del restaurante */}
                        <div>
                            <img
                                src={contactoImage}
                                alt="Restaurante La Sirena"
                                className="w-full rounded-lg mb-32 pt-8 shadow-lg"
                            />
                        </div>

                        {/* Formulario de contacto */}
                        <div className="space-y-6">
                            <h2 className="text-5xl pt-8 font-playfair">CONTÁCTANOS</h2>
                            <p className="text-gray-700 leading-relaxed">
                                ¡Contáctanos para cualquier consulta o sugerencia!<br/>
                                Rellena nuestro formulario o escríbenos por correo electrónico o teléfono.<br/>
                                ¡Estamos aquí para ayudarte!
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        placeholder="Nombre"
                                        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 outline-none"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 outline-none"
                                        required
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Mensaje"
                                    rows="5"
                                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 outline-none"
                                    required
                                />

                                <label className="flex items-center space-x-2 text-gray-700">
                                    <input
                                        type="checkbox"
                                        name="privacy"
                                        checked={formData.privacy}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-yellow-500"
                                        required
                                    />
                                    <span>
                                        He leído y acepto la{' '}
                                        <Link to="/politica-de-privacidad" className="text-yellow-600 underline">
                                            Política de Privacidad
                                        </Link>
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-yellow-500 text-white font-semibold uppercase  hover:bg-yellow-600 transition-colors duration-300"
                                >
                                    CONTACTA
                                </button>

                                {statusMessage && (
                                    <p className="mt-2 text-center text-sm text-red-500">
                                        {statusMessage}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer sin espacio extra bajo él */}
            <div className="bg-neutral-900">
                <Footer />
            </div>
        </>
    );
}
