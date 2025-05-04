import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacidad() {
    return (
        <div className="bg-fondo text-light-gray min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow py-16 px-6">
                <div className="max-w-4xl mx-auto bg-light-gray p-8 rounded-lg shadow-xl text-dark-green">
                    <h1 className="text-3xl font-playfair text-secund text-center mb-4">
                        Política de Privacidad
                    </h1>
                    <p className="text-sm text-dark-green text-center mb-8">
                        Última actualización: 09/02/2025
                    </p>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            1. Responsable del Tratamiento
                        </h2>
                        <p>
                            <strong>Titular:</strong> La Masia S.L.
                        </p>
                        <p>
                            <strong>CIF:</strong> B12345678
                        </p>
                        <p>
                            <strong>Domicilio:</strong> Cami de la Pineda, 98, 08233
                            Vacarisses (Barcelona)
                        </p>
                        <p>
                            <strong>Email:</strong> info@restaurantmasia.cat
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            2. Datos Recopilados
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Contacto:</strong> Nombre, email, mensaje.
                            </li>
                            <li>
                                <strong>Cookies:</strong> Para mejorar tu experiencia.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            3. Finalidad
                        </h2>
                        <p>Gestionar consultas y comunicaciones vía formulario.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            4. Derechos
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>Acceder, rectificar o suprimir tus datos.</li>
                            <li>Oponerte o limitar su tratamiento.</li>
                        </ul>
                        <p className="mt-2">
                            Escríbenos a{" "}
                            <a
                                href="mailto:info@restaurantmasia.cat"
                                className="text-secund hover:underline"
                            >
                                info@restaurantmasia.cat
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            5. Conservación
                        </h2>
                        <p>
                            Tus datos se guardan durante 4 años o hasta que solicites su
                            eliminación.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
