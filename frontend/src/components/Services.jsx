// components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, GlobeAltIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import pdfFile from '../assets/servicios_ESP.pdf'; // Importamos el PDF correctamente

const servicesData = [
    {
        id: 1,
        title: "Transformación Digital de Alto Nivel",
        icon: <GlobeAltIcon className="w-10 h-10 text-yellow-500" />,
        features: [
            <>
                <strong>🎨 Diseño web a medida → Una identidad digital única</strong>
                <br />
                Creamos páginas web profesionales desde cero, programadas al 100% sin plantillas, garantizando un diseño exclusivo y adaptado a la esencia de su restaurante.
            </>,
            <>
                <strong>🖌️ Estética personalizada → La imagen que su negocio merece</strong>
                <br />
                Nos adaptamos a su estilo y preferencias, combinando tendencias modernas con acabados de alta calidad para ofrecer una web visualmente atractiva y funcional.
            </>,
            <>
                <strong>⚡ Rendimiento optimizado → Rápida, segura y adaptada a cualquier dispositivo</strong>
                <br />
                Nuestras páginas están diseñadas para cargar con velocidad, ofrecer una navegación fluida y ser totalmente responsivas en móviles, tablets y ordenadores.
            </>,
            <>
                <strong>🔄 Actualizaciones constantes → Una web siempre al día</strong>
                <br />
                Nos encargamos del mantenimiento y actualización de su sitio web, asegurando que esté optimizado, seguro y alineado con las necesidades cambiantes de su negocio.
            </>,
            <>
                <strong>🛠️ Soporte técnico 24/7 → Respuesta inmediata ante cualquier imprevisto</strong>
                <br />
                Un equipo siempre disponible para resolver cualquier problema, hacer ajustes o implementar mejoras cuando lo necesite.
            </>,
            <>
                <strong>🔗 Integración con herramientas digitales → Más que una web, un sistema eficiente</strong>
                <br />
                Conectamos su página con reservas, pedidos online, automatización de clientes y herramientas de marketing para potenciar su negocio al máximo.
            </>,
            <>
                <strong>🤝 Gestión sin complicaciones → Nos encargamos de todo por usted</strong>
                <br />
                Olvídese de problemas técnicos y dedique su tiempo a lo que realmente importa. Nosotros garantizamos que su presencia digital funcione de manera impecable.
            </>
        ]
    },
    {
        id: 2,
        title: "Automatización y Optimización Inteligente",
        icon: <ChartBarIcon className="w-10 h-10 text-yellow-500" />,
        features: [
            <>
                <strong>🚀 Menos tiempo gestionando reservas → Más enfoque en su negocio</strong>
                <br />
                Nuestra plataforma automatiza gran parte del proceso de reservas a través de la web, reduciendo llamadas y mensajes manuales. Su equipo dedicará menos tiempo a la administración y más a ofrecer un excelente servicio.
            </>,
            <>
                <strong>📅 Confirmaciones y recordatorios automáticos → Reducción de ausencias</strong>
                <br />
                Cada reserva se confirma y recuerda automáticamente por WhatsApp o email, minimizando cancelaciones de última hora y asegurando una ocupación más estable.
            </>,
            <>
                <strong>🍽️ Asignación inteligente de mesas → Espacio optimizado sin esfuerzo</strong>
                <br />
                El sistema distribuye las mesas automáticamente según la capacidad y reservas del restaurante, eliminando la necesidad de organizar manualmente la disposición de los clientes.
            </>,
            <>
                <strong>🔄 Cancelaciones sin impacto → Lista de espera automatizada</strong>
                <br />
                Cuando un cliente cancela, nuestro sistema lo reemplaza de inmediato con la siguiente persona en lista de espera, evitando huecos en la agenda y maximizando la ocupación.
            </>,
            <>
                <strong>💬 Comunicación automática con clientes → Menos tiempo respondiendo consultas</strong>
                <br />
                Los clientes reciben automáticamente información sobre su reserva, ubicación, menú y disponibilidad, reduciendo la carga de trabajo del personal y mejorando la experiencia del usuario.
            </>,
            <>
                <strong>📊 Reportes automáticos → Control total en un clic</strong>
                <br />
                Obtenga informes mensuales detallados sobre reservas, ocupación y tendencias, sin necesidad de recopilar datos manualmente.
            </>,
            <>
                <strong>⭐ Feedback sin esfuerzo → Opiniones automatizadas para mejorar su servicio</strong>
                <br />
                Envíe encuestas automáticas tras cada visita y reciba valoraciones en tiempo real, optimizando la experiencia del cliente sin invertir tiempo extra.
            </>
        ]
    },
];

function Services() {
    return (
        <section id="services" className="py-16 bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Digitalización y automatización sin complicaciones
                    </h2>
                    <p className="mt-2 text-yellow-500">
                        - Especializados en Restauración -
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesData.map(service => (
                        <motion.div
                            key={service.id}
                            className="bg-white text-gray-900 rounded-lg p-6 shadow-lg flex flex-col"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <div className="mb-4">{service.icon}</div>

                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="mb-1">{feature}</li>
                                ))}
                            </ul>
                            <button
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="mt-auto bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
                            >
                                Contáctanos
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Sección de descarga */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl py-3 mt-6 font-bold text-white mb-4">
                        Descarga toda la información de nuestros servicios
                    </h3>
                    <a
                        href={pdfFile}
                        download="Servicios_Restauracion.pdf"
                        className="bg-yellow-500 text-white py-3 px-6 mb-6 rounded-lg flex items-center justify-center mx-auto w-48 hover:bg-yellow-600 transition-colors"
                    >
                        <ArrowDownTrayIcon className="w-6 h-6 mr-2" />
                        Descargar PDF
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;
