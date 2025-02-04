import React, { useState } from "react";
import { createBooking } from "../services/bookingService";

function BookingForm() {
    const [formData, setFormData] = useState({
        capacity: "2",        // default to 2-person
        date: "",
        time: "14:00",        // default to midday
        customer_name: "",
    });

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    // Handle changes in all form fields
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    // Submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);

        try {
            const response = await createBooking(formData);
            setMessage(response.data.message || "Booking successful!");
        } catch (err) {
            // If the server returned an error, show it
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Capacity field */}
            <div>
                <label className="block mb-1 font-medium text-gray-700">Select Table Capacity</label>
                <select
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-2"
                >
                    <option value="2">2 people</option>
                    <option value="4">4 people</option>
                    <option value="6">6 people</option>
                </select>
            </div>

            {/* Date field */}
            <div>
                <label className="block mb-1 font-medium text-gray-700">Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-2"
                    required
                />
            </div>

            {/* Time field */}
            <div>
                <label className="block mb-1 font-medium text-gray-700">Time</label>
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-2"
                    required
                />
            </div>

            {/* Customer name (optional) */}
            <div>
                <label className="block mb-1 font-medium text-gray-700">Your Name (Optional)</label>
                <input
                    type="text"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-2"
                />
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Book Now
            </button>

            {/* Success / Error Messages */}
            {message && <div className="mt-4 text-green-700 font-semibold">{message}</div>}
            {error && <div className="mt-4 text-red-700 font-semibold">{error}</div>}
        </form>
    );
}

export default BookingForm;
