import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cookies() {
    return (
        <div className="bg-fondo text-light-gray min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow py-16 px-6">
                <div className="max-w-4xl mx-auto bg-light-gray p-8 rounded-lg shadow-xl text-dark-green">
                    <h1 className="text-3xl font-playfair text-secund text-center mb-4">
                        Política de Cookies
                    </h1>
                    <p className="text-sm text-dark-green text-center mb-8">
                        Última actualización: 09/02/2025
                    </p>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            1. ¿Qué son las cookies?
                        </h2>
                        <p>
                            Pequeños archivos que se almacenan en tu dispositivo para mejorar
                            la experiencia y recordar preferencias.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            2. Tipos de cookies
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Técnicas:</strong> Necesarias para el funcionamiento.
                            </li>
                            <li>
                                <strong>Analíticas:</strong> Para entender cómo usas la web.
                            </li>
                            <li>
                                <strong>Publicidad:</strong> Para mostrarte anuncios
                                personalizados.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            3. Gestión de cookies
                        </h2>
                        <p>
                            Puedes bloquear o eliminar cookies desde la configuración de tu
                            navegador. En nuestro aviso solo ofrecemos “Aceptar todas”.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            4. Duración
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Sesión:</strong> Se eliminan al cerrar la ventana.
                            </li>
                            <li>
                                <strong>Persistentes:</strong> Entre 30 días y 1 año.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            5. Contacto
                        </h2>
                        <p>
                            Dudas sobre esta política: info@restaurantmasia.cat
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
