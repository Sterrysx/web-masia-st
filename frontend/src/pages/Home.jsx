// pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import MissionPhilosophy from '../components/MissionPhilosophy';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function Home() {
    return (
        <div className="relative bg-gray-900 text-white">
            {/* Animación de fondo */}
            <BackgroundAnimation />
            <Navbar />
            <main className="pt-16">
                <Hero />
                <Services />
                <About />
                <MissionPhilosophy />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
