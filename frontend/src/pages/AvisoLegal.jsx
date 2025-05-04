import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AvisoLegal() {
    return (
        <div className="bg-fondo text-light-gray min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow py-16 px-6">
                <div className="max-w-4xl mx-auto bg-light-gray p-8 rounded-lg shadow-xl text-dark-green">
                    <h1 className="text-3xl font-playfair text-secund text-center mb-4">
                        Aviso Legal
                    </h1>
                    <p className="text-sm text-dark-green text-center mb-8">
                        Última actualización: 09/02/2025
                    </p>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            1. Información General
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
                        <p>
                            <strong>Finalidad:</strong> Presentación del restaurante y
                            gestión de reservas.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            2. Condiciones de Uso
                        </h2>
                        <p>
                            El acceso y uso de este sitio web implica la aceptación de este
                            Aviso Legal y de nuestra{" "}
                            <a
                                href="/politica-de-privacidad"
                                className="text-secund hover:underline"
                            >
                                Política de Privacidad
                            </a>
                            .
                        </p>
                        <p className="mt-2">
                            Queda prohibido utilizar la web con fines ilícitos o que puedan
                            causar daño a terceros.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            3. Propiedad Intelectual
                        </h2>
                        <p>
                            Todos los contenidos (textos, imágenes, diseños) son propiedad de
                            La Masia S.L. o disponen de licencia de uso.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            4. Exclusión de Responsabilidad
                        </h2>
                        <p>
                            La Masia no garantiza la disponibilidad continua de la web y no
                            se responsabiliza de daños derivados de su uso.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            5. Enlaces a terceros
                        </h2>
                        <p>
                            La web puede contener enlaces a sitios externos. No nos
                            responsabilizamos de su contenido ni funcionamiento.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-nav mb-2">
                            6. Legislación y Jurisdicción
                        </h2>
                        <p>
                            Este Aviso Legal se rige por la legislación española y los
                            tribunales de Barcelona serán competentes para resolver cualquier
                            controversia.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
