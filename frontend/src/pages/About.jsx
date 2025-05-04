// src/pages/About.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText.jsx';

import ft1 from '../assets/12.jpg';
import ft2 from '../assets/team3.jpg';
import ft3 from '../assets/14.jpg';
import ft4 from '../assets/8.jpg';
import carta from '../assets/carta.pdf';

export default function About() {
    return (
        <>
            <Navbar />

            {/* Hero con imagen oscurecida */}
            <section className="relative w-full h-64 md:h-96 overflow-hidden">
                <img
                    src={ft1}
                    alt="Restaurante La Masia"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Aquí se podría incluir un título o slogan si se desea */}
                </div>
            </section>

            {/* Contenido principal */}
            <section className="bg-gray-100 py-16 px-6 md:px-12 space-y-20">

                {/* Sección Gastronomía Catalana */}
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <AnimatedText>
                        <p className="text-sm uppercase tracking-wider text-secund">
                            La Masia
                        </p>
                    </AnimatedText>
                    <AnimatedText>
                        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
                            Gastronomía Catalana
                        </h2>
                    </AnimatedText>
                    <AnimatedText>
                        <p className="text-gray-700 leading-relaxed">
                            En La Masia ofrecemos un auténtico viaje a los sabores de la cocina típica catalana, con menús que rondan los 30-40 € por persona. Nuestro recetario combina la tradición de hace décadas con toques de creatividad, utilizando siempre productos de temporada y procedencia local para garantizar la máxima calidad y frescura en cada bocado.
                        </p>
                    </AnimatedText>
                    <AnimatedText>
                        <a
                            href={carta}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block px-6 py-2 border-2 border-secund text-secund font-medium hover:bg-secund hover:text-white transition-colors"
                        >
                            Ver Carta
                        </a>
                    </AnimatedText>

                </div>

                {/* Sección Nuestro Equipo */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white rounded-sm shadow-xl overflow-hidden">
                    <div className="h-80 md:h-auto overflow-hidden">
                        <img
                            src={ft2}
                            alt="Nuestro Equipo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 flex flex-col justify-center space-y-4">
                        <AnimatedText>
                            <p className="text-sm uppercase tracking-wider text-secund">
                                La Masia
                            </p>
                        </AnimatedText>
                        <AnimatedText>
                            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
                                Nuestro Equipo
                            </h2>
                        </AnimatedText>
                        <AnimatedText>
                            <p className="text-gray-700 leading-relaxed">
                                En La Masia contamos con un equipo de chefs especializados, formados en las escuelas más prestigiosas de Cataluña, que combinan técnica y pasión para crear platos inolvidables. Además, nuestro personal de sala ofrece un servicio atento y cercano, siempre pendiente de cada detalle para que la experiencia de nuestros comensales sea excepcional.
                            </p>
                        </AnimatedText>
                        <AnimatedText>
                            <NavLink
                                to="/contact"
                                className="mt-4 inline-block px-6 py-2 border-2 border-secund text-secund font-medium hover:bg-secund hover:text-white transition-colors"
                            >
                                Contáctanos
                            </NavLink>
                        </AnimatedText>
                    </div>
                </div>

                {/* Sección Nuestra Historia */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
                    <div className="p-8 space-y-4">
                        <AnimatedText>
                            <p className="text-sm uppercase tracking-wider text-secund">
                                La Masia
                            </p>
                        </AnimatedText>
                        <AnimatedText>
                            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
                                Nuestra Historia
                            </h2>
                        </AnimatedText>
                        <AnimatedText>
                            <p className="text-gray-700 leading-relaxed">
                                Fundada en 1953 por Maria y Josep, una pareja apasionada por la tradición catalana, La Masia nació como un pequeño restaurante familiar en el corazón de Barcelona. Con los años, hemos mantenido vivo el espíritu original: un lugar acogedor donde cada plato cuenta una historia de sabor y herencia. Hoy, tres generaciones después, seguimos fieles a nuestras raíces y al calor de hogar que define nuestra casa.
                            </p>
                        </AnimatedText>
                    </div>
                    <div className="h-80 md:h-auto overflow-hidden mb-4 rounded-sm shadow-lg">
                        <img
                            src={ft3}
                            alt="Nuestra Historia"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Sección Nuestras Instalaciones */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white rounded-sm shadow-xl overflow-hidden">
                    <div className="h-80 md:h-auto overflow-hidden">
                        <img
                            src={ft4}
                            alt="Nuestras Instalaciones"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 flex flex-col justify-center space-y-4">
                        <AnimatedText>
                            <p className="text-sm uppercase tracking-wider text-secund">
                                La Masia
                            </p>
                        </AnimatedText>
                        <AnimatedText>
                            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
                                Nuestras Instalaciones
                            </h2>
                        </AnimatedText>
                        <AnimatedText>
                            <p className="text-gray-700 leading-relaxed">
                                Nuestro restaurante combina un ambiente rústico y elegante, con vigas de madera originales y una decoración que evoca las masías tradicionales de Cataluña. Disponemos de varias estancias íntimas y una terraza exterior ideal para disfrutar de comidas al aire libre en las tardes soleadas.
                            </p>
                        </AnimatedText>
                        <AnimatedText>
                            <NavLink
                                to="/contact"
                                className="mt-4 inline-block px-6 py-2 border-2 border-secund text-secund font-medium hover:bg-secund hover:text-white transition-colors"
                            >
                                Visítanos
                            </NavLink>
                        </AnimatedText>
                    </div>
                </div>
                <div className="h-80 md:h-auto overflow-hidden">

                </div>

            </section>

            <Footer />
        </>
    );
}