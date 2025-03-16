// pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet'; // <--- IMPORTANTE
import Navbar from '../components/Navbar';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Carrousel from '../components/carrousel';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function Home() {
    return (
        <>
            <Helmet>
                {/* Title enfocado en el nombre de marca */}
                <title>Stellar Progress | Transformación Digital y Automatización</title>

                {/* Meta descripción con la palabra clave “Stellar Progress” */}
                <meta
                    name="description"
                    content="Bienvenido a Stellar Progress. Ofrecemos soluciones de digitalización y automatización para comercios y restaurantes. ¡Descubre cómo impulsar tu negocio!"
                />

                {/* Palabras clave (opcionales, Google les presta poca atención, pero no está de más) */}
                <meta
                    name="keywords"
                    content="Stellar Progress, digitalización, automatización, comercio, restaurante"
                />

                {/* Etiquetas Open Graph (para redes sociales) */}
                <meta property="og:title" content="Stellar Progress | Transformación Digital y Automatización" />
                <meta property="og:description" content="Soluciones a medida para que tu negocio destaque. Contáctanos." />
                <meta property="og:image" content="https://www.tu-dominio.com/og-image.jpg" />
                <meta property="og:url" content="https://www.tu-dominio.com/" />

                {/* Datos estructurados básicos (Organization) en JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Stellar Progress",
                        "url": "https://www.tu-dominio.com",
                        "logo": "https://www.tu-dominio.com/logo.png",
                        "description": "Especialistas en digitalización y automatización.",
                        "contactPoint": [{
                            "@type": "ContactPoint",
                            "telephone": "+34 650 341 022",
                            "contactType": "customer service"
                        }]
                    })}
                </script>
            </Helmet>

            {/* Se añade la clase font-merriweather para aplicar la fuente en toda la página */}
            <div className="relative bg-gray-900 text-white font-plus">
                {/* Animación de fondo */}
                <BackgroundAnimation />
                <Navbar />
                <main className="pt-0">
                    <Carrousel />
                    <About />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Home;
