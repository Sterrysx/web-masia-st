// components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
    {
        id: 1,
        title: "Desarrollo de Páginas Web",
        icon: "🌐",
        features: [
            "Diseño personalizado para restaurantes",
            "Customización completa (One-page y Multi-page)",
            "Integración de sistema de reservas autónomo",
            "Gestión de cancelaciones automatizada"
        ]
    },
    {
        id: 2,
        title: "Sistema de Gestión para Restaurantes (RMS)",
        icon: "📊",
        features: [
            "Gestión de empleados (turnos, nóminas, asistencia)",
            "Control de inventario (stocks, proveedores)",
            "Sistema contable (seguimiento de ingresos/gastos)",
            "Reportes y analíticas de ventas y costos",
            "Gestión de reservas de mesas"
        ]
    },
    {
        id: 3,
        title: "Sistema de Punto de Venta (POS)",
        icon: "💳",
        features: [
            "Toma de pedidos (tablets, móvil, terminales)",
            "Envío automático de órdenes a cocina",
            "Procesamiento de pagos (tarjetas, efectivo, digital)",
            "Gestión de mesas (ocupadas/reservadas)",
            "Sincronización automática con inventario",
            "Reportes y analíticas",
            "Compatibilidad completa con RMS"
        ]
    },
    {
        id: 4,
        title: "Mantenimiento de Páginas Web",
        icon: "🔧",
        features: [
            "Compatibilidad universal (terceros y sitios propios)",
            "Gestión completa (migraciones, actualizaciones, hosting)",
            "Seguridad avanzada (protección contra ciberamenazas)",
            "Precios competitivos",
            "Soporte continuo"
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
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Digitalización Completa De Su Restaurante
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
                            <div className="text-yellow-500 text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <ul className="list-disc pl-5 mb-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="mb-1">{feature}</li>
                                ))}
                            </ul>
                            <button className="mt-auto bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors">
                                Contáctanos
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
