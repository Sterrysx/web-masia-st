import React, { useState } from "react";
import emailjs from "emailjs-com";
import backgroundImage from "../assets/business2.jpg"; // Importa la imagen de fondo

export default function ContactPage() {
    // Se actualiza el estado para utilizar "from_name" en lugar de "name"
    const [formData, setFormData] = useState({
        from_name: "",
        email: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState(""); // Mensaje de éxito o error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.email || !formData.message) {
            setStatusMessage("❌ Todos los campos son obligatorios.");
            return;
        }

        emailjs
            .send(
                "service_h0ixtdj", // ✅ Tu Service ID
                "template_0381cij", // ✅ Tu Template ID
                formData,
                "U4nc_U-t0HUyaRorg" // ✅ Tu User ID (Public Key)
            )
            .then(
                () => {
                    setStatusMessage("✅ ¡Mensaje enviado con éxito!");
                    setFormData({ from_name: "", email: "", message: "" }); // Limpia el formulario tras el envío
                },
                (error) => {
                    setStatusMessage("❌ Error al enviar el mensaje. Inténtalo de nuevo.");
                    console.error("Error:", error);
                }
            );
    };

    return (
        <div
            className="min-h-screen flex py-24 items-center justify-center bg-gray-600 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Imagen de fondo
        >
            <div className="bg-black bg-opacity-70 p-8 mt-36 rounded-lg shadow-lg max-w-md w-full z-30">
                <h2 className="text-2xl font-semibold text-gray-100 text-center mb-6">
                    Contacto
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-100 mb-2">Nombre</label>
                        <input
                            type="text"
                            name="from_name" // Se utiliza "from_name" para que coincida con el template
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder="Escriba su nombre"
                            className="w-full p-3 bg-gray-700 bg-opacity-70 text-gray-200 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100 mb-2">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Escriba su correo electrónico"
                            className="w-full p-3 bg-gray-700 bg-opacity-70 text-gray-200 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100 mb-2">Mensaje</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Escriba su mensaje"
                            rows="4"
                            className="w-full p-3 bg-gray-700 bg-opacity-70 text-gray-200 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
                    >
                        ENVIAR
                    </button>
                </form>

                {/* Mensaje de estado (Éxito/Error) */}
                {statusMessage && (
                    <p className="mt-4 text-center text-sm text-yellow-400">{statusMessage}</p>
                )}
            </div>
        </div>
    );
}
