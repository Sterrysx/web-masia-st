// src/components/BookingForm.jsx
import React, { useState } from "react";
import { createBooking } from "../services/bookingService";

function BookingForm() {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
    });
    const [error, setError] = useState(null);
    const [confirmation, setConfirmation] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simple validation
        if (!formData.date || !formData.time || formData.guests < 1) {
            setError("All fields are required, and guests must be at least 1");
            return;
        }
        setError(null);

        try {
            const result = await createBooking(formData);
            setConfirmation(`Booking created! Your booking ID: ${result.bookingId}`);
        } catch (err) {
            setError("Could not create booking. Please try again.");
        }
    };

    return (
        <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold mb-4">Reserve Your Table</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {confirmation && <p className="text-green-500 mb-4">{confirmation}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Date */}
                <div>
                    <label htmlFor="date" className="block font-semibold mb-1">
                        Date:
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                </div>

                {/* Time */}
                <div>
                    <label htmlFor="time" className="block font-semibold mb-1">
                        Time:
                    </label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                </div>

                {/* Number of Guests */}
                <div>
                    <label htmlFor="guests" className="block font-semibold mb-1">
                        Number of Guests:
                    </label>
                    <input
                        type="number"
                        name="guests"
                        id="guests"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Book Now
                </button>
            </form>
        </div>
    );
}

export default BookingForm;
