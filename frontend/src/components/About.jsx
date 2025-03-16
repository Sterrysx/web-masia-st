import React from "react";
import teamImage from "../assets/team3.jpg";
import restImage from "../assets/rest-1.jpg";
import AnimatedText from "./AnimatedText"; // Asegúrate de que la ruta sea correcta

export default function About() {
    return (
        <section id="about" className="w-full bg-white">
            {/* Sección 1: "Gastronomía" */}
            <div className="w-full py-16 px-8 text-center">
                <AnimatedText>
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        SOBRE NOSOTROS
                    </p>
                </AnimatedText>
                <AnimatedText>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Gastronomía
                    </h2>
                </AnimatedText>
                <AnimatedText>
                    <p className="text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto">
                        Nuestro restaurante se enorgullece de ofrecer una propuesta culinaria basada en productos frescos de primera calidad. Cada ingrediente es cuidadosamente seleccionado, trabajando en estrecha colaboración con proveedores locales para garantizar la máxima frescura y sabor en cada plato. La carta combina recetas tradicionales con toques de vanguardia, reflejando nuestro compromiso constante con la innovación gastronómica y la excelencia en cada detalle.
                    </p>
                </AnimatedText>
                <AnimatedText>
                    <button className="border border-gray-800 px-6 py-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300">
                        Más información
                    </button>
                </AnimatedText>
            </div>

            {/* Sección 2: "Nuestro Equipo" */}
            <div className="w-full flex flex-col md:flex-row items-stretch">
                <div className="md:w-1/2 aspect-w-4 aspect-h-3 overflow-hidden">
                    <img
                        src={teamImage}
                        alt="Nuestro Equipo"
                        className="w-full h-full object-cover animate-zoomInOut"
                    />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left">
                    <AnimatedText>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            SOBRE NOSOTROS
                        </p>
                    </AnimatedText>
                    <AnimatedText>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nuestro Equipo
                        </h2>
                    </AnimatedText>
                    <AnimatedText>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            El equipo de Sommelier está liderado por una pareja de emprendedores con una gran pasión por la restauración y la hospitalidad. Gracias a su dedicación y visión, han logrado formar un grupo de profesionales compuesto por cocineros, camareros y sumilleres que trabajan en armonía para ofrecer una experiencia inigualable al cliente. La colaboración y el buen ambiente de trabajo se perciben en cada servicio, haciendo que nuestros visitantes se sientan como en casa.
                        </p>
                    </AnimatedText>
                    <AnimatedText>
                        <button className="border border-gray-800 px-6 py-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300">
                            Más información
                        </button>
                    </AnimatedText>
                </div>
            </div>

            {/* Sección 3: "Nuestra Historia" */}
            <div className="w-full flex flex-col md:flex-row items-stretch">
                <div className="md:w-1/2 p-8 order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
                    <AnimatedText>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            SOBRE NOSOTROS
                        </p>
                    </AnimatedText>
                    <AnimatedText>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nuestra Historia
                        </h2>
                    </AnimatedText>
                    <AnimatedText>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            La historia de Sommelier se remonta a la determinación de Laura y Miquel, una joven pareja que, con poco más de veinte años, decidió embarcarse en la aventura de la restauración. Su entusiasmo por la cocina y el deseo de compartir su pasión con el mundo los impulsaron a abrir las puertas de un pequeño local. Con esfuerzo y perseverancia, fueron ganándose la confianza de la comunidad, ampliando su propuesta gastronómica y formando un equipo comprometido. Hoy en día, Sommelier es el resultado de aquella ilusión temprana convertida en una realidad que inspira a todos los que visitan el restaurante.
                        </p>
                    </AnimatedText>
                    <AnimatedText>
                        <button className="border border-gray-800 px-6 py-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300">
                            Más información
                        </button>
                    </AnimatedText>
                </div>
                <div className="md:w-1/2 aspect-w-4 aspect-h-3 overflow-hidden order-1 md:order-2">
                    <img
                        src={restImage}
                        alt="Nuestra Historia"
                        className="w-full h-full object-cover animate-zoomInOut"
                    />
                </div>
            </div>
        </section>
    );
}
