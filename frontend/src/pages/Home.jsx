// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Carrousel from '../components/carrousel';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Helmet>
                <title>Stellar Progress | Transformación Digital y Automatización</title>
                <meta
                    name="description"
                    content="Bienvenido a Stellar Progress. Ofrecemos soluciones de digitalización y automatización para comercios y restaurantes. ¡Descubre cómo impulsar tu negocio!"
                />
                <meta
                    name="keywords"
                    content="Stellar Progress, digitalización, automatización, comercio, restaurante"
                />
                <meta property="og:title" content="Stellar Progress | Transformación Digital y Automatización" />
                <meta property="og:description" content="Soluciones a medida para que tu negocio destaque. Contáctanos." />
                <meta property="og:image" content="https://www.tu-dominio.com/og-image.jpg" />
                <meta property="og:url" content="https://www.tu-dominio.com/" />
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

            <div className="relative bg-gray-900 text-white font-plus">
                <BackgroundAnimation />
                <Navbar />
                <main className="pt-0">
                    <Carrousel />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Home;
