// src/pages/About.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText.jsx';
import img3 from '../assets/img3.jpg';
import teamImage from '../assets/team3.jpg';
import restImage from '../assets/rest-1.jpg';

export default function About() {
    return (
        <>
            <Navbar />

            {/* Hero con imagen oscurecida y título */}
            <section className="relative w-full h-64 md:h-96 overflow-hidden">
                <img
                    src={img3}
                    alt="El Restaurante"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl font-playfair text-white  drop-shadow-lg">
                        El Restaurante
                    </h1>
                </div>
            </section>

            {/* Contenido principal */}
            <section className="bg-gray-100 py-16 px-6 md:px-12 space-y-20">
                {/* Sección Gastronomía */}
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <AnimatedText>
                        <p className="text-sm uppercase tracking-wider text-yellow-500">
                            Sobre Nosotros
                        </p>
                    </AnimatedText>
                    <AnimatedText>
                        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
                            Gastronomía
                        </h2>
                    </AnimatedText>
                    <AnimatedText>
                        <p className="text-gray-700 leading-relaxed">
                            Nuestro restaurante se enorgullece de ofrecer una propuesta culinaria basada en productos frescos de primera calidad. Cada ingrediente es cuidadosamente seleccionado, trabajando en estrecha colaboración con proveedores locales para garantizar la máxima frescura y sabor en cada plato. La carta combina recetas tradicionales con toques de vanguardia, reflejando nuestro compromiso constante con la innovación gastronómica y la excelencia en cada detalle.
                        </p>
                    </AnimatedText>
                    <AnimatedText>
                        <button className="mt-4 px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium rounded-lg hover:bg-yellow-500 hover:text-white transition-colors">
                            Ver Carta
                        </button>
                    </AnimatedText>
                </div>

                {/* Sección Nuestro Equipo */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="h-80 md:h-auto overflow-hidden">
                        <img
                            src={teamImage}
                            alt="Nuestro Equipo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 flex flex-col justify-center space-y-4">
                        <AnimatedText>
                            <p className="text-sm uppercase tracking-wider text-yellow-500">
                                Sobre Nosotros
                            </p>
                        </AnimatedText>
                        <AnimatedText>
                            <h2 className="text-3xl md:text-4xl font-bold  font-playfair text-gray-800">
                                Nuestro Equipo
                            </h2>
                        </AnimatedText>
                        <AnimatedText>
                            <p className="text-gray-700 leading-relaxed">
                                El equipo de Sommelier está liderado por emprendedores con una gran pasión por la restauración y la hospitalidad. Gracias a su dedicación y visión, han conformado un grupo de profesionales compuesto por cocineros, camareros y sumilleres que trabajan en perfecta armonía para ofrecer una experiencia inigualable al cliente.
                            </p>
                        </AnimatedText>
                        <AnimatedText>
                            <button className="mt-4 px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium rounded-lg hover:bg-yellow-500 hover:text-white transition-colors">
                                Conócenos Más
                            </button>
                        </AnimatedText>
                    </div>
                </div>

                {/* Sección Nuestra Historia */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
                    <div className="p-8 space-y-4">
                        <AnimatedText>
                            <p className="text-sm uppercase tracking-wider text-yellow-500">
                                Sobre Nosotros
                            </p>
                        </AnimatedText>
                        <AnimatedText>
                            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
                                Nuestra Historia
                            </h2>
                        </AnimatedText>
                        <AnimatedText>
                            <p className="text-gray-700 leading-relaxed">
                                La historia de Sommelier comienza con Laura y Miquel, una joven pareja que, con poco más de veinte años, decidió abrir un pequeño local motivados por su pasión por la cocina. Con esfuerzo y perseverancia fueron ganándose la confianza de la comunidad hasta convertirse en un referente de la gastronomía local.
                            </p>
                        </AnimatedText>

                    </div>
                    <div className="h-80 md:h-auto overflow-hidden mb-32 rounded-xl shadow-lg">
                        <img
                            src={restImage}
                            alt="Nuestra Historia"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
