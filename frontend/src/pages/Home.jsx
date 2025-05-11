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
                <title>La Masia Vacarisses | Restaurante de Cocina Tradicional Catalana</title>
                <meta
                    name="description"
                    content="La Masia en Vacarisses: restaurante de cocina tradicional catalana. Platos caseros con ingredientes locales y ambiente acogedor."
                />
                <meta
                    name="keywords"
                    content="La Masia, restaurante, Vacarisses, cocina tradicional catalana, gastronomía catalana"
                />
                <meta property="og:title" content="La Masia Vacarisses | Restaurante de Cocina Tradicional Catalana" />
                <meta property="og:description" content="Visita La Masia en Vacarisses, cocina tradicional catalana con platos caseros y auténticos sabores." />
                <meta property="og:image" content="https://restaurantmasia.cat/og-image.jpg" />
                <meta property="og:url" content="https://restaurantmasia.cat/" />
                <meta property="og:type" content="restaurant" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="La Masia Vacarisses | Restaurante de Cocina Tradicional Catalana" />
                <meta name="twitter:description" content="Restaurante de cocina tradicional catalana en Vacarisses con platos caseros e ingredientes locales." />
                <meta name="twitter:image" content="https://restaurantmasia.cat/og-image.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Restaurant",
                        "name": "La Masia",
                        "url": "https://restaurantmasia.cat/",
                        "logo": "https://restaurantmasia.cat/logo.png",
                        "description": "Restaurante de cocina tradicional catalana en Vacarisses, con platos caseros elaborados con ingredientes locales.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Vacarisses",
                            "addressRegion": "Barcelona",
                            "addressCountry": "ES"
                        },
                        "telephone": "+34 650 341 022",
                        "servesCuisine": "Cocina tradicional catalana",
                        "image": "https://restaurantmasia.cat/og-image.jpg"
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
