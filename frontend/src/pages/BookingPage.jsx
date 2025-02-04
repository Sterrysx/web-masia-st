// src/pages/BookingPage.jsx
import React, { useState, useEffect } from "react";
import { fetchTableAvailability, bookTable } from "../services/bookingService";

function BookingPage() {
    // State for tables, booking details, and UI feedback
    const [tables, setTables] = useState([]); // Array of table objects: { id, capacity, available_count }
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCapacity, setSelectedCapacity] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [customerName, setCustomerName] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [bookingInProgress, setBookingInProgress] = useState(false); // To disable button and show spinner during booking

    // Fetch the current table availability on component mount
    useEffect(() => {
        const loadAvailability = async () => {
            try {
                setIsLoading(true);
                const data = await fetchTableAvailability(); // API call to fetch availability data
                setTables(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        loadAvailability();
    }, []);

    // Open the booking modal and reset previous state
    const handleOpenModal = (capacity) => {
        setSelectedCapacity(capacity);
        setCustomerName("");
        setMessage(null);
        setError(null);
        setShowModal(true);
    };

    // Close the booking modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCapacity(null);
    };

    // Handle the booking form submission
    const handleBook = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);
        setBookingInProgress(true); // Indicate booking is in progress

        try {
            // Call the booking API endpoint
            const result = await bookTable(selectedCapacity, customerName);
            setMessage(result.message || "Booking successful!");

            // Update local table availability after a successful booking
            setTables((prevTables) =>
                prevTables.map((t) =>
                    t.capacity === selectedCapacity
                        ? { ...t, available_count: t.available_count - 1 }
                        : t
                )
            );
        } catch (err) {
            // Handle error responses from the server or network errors
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setBookingInProgress(false);
        }
    };

    // Filter out table types with zero availability
    const visibleTables = tables.filter((t) => t.available_count > 0);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
                One-Time Event - February 8, 14:00
            </h1>

            {isLoading && <p>Loading table availability...</p>}
            {!isLoading && visibleTables.length === 0 && (
                <p className="text-red-600 text-lg">No tables left!</p>
            )}

            {/* Display available table types */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {visibleTables.map((table) => (
                    <div
                        key={table.id}
                        className="bg-white shadow-md rounded p-4 flex flex-col items-center"
                    >
                        <h2 className="text-xl font-bold mb-2">Table for {table.capacity}</h2>
                        <p className="mb-4">Available tables: {table.available_count}</p>
                        <button
                            onClick={() => handleOpenModal(table.capacity)}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Book Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded p-6 w-11/12 sm:w-96">
                        <h3 className="text-xl font-semibold mb-4">
                            Booking Table for {selectedCapacity}
                        </h3>
                        <form onSubmit={handleBook} className="space-y-3">
                            <div>
                                <label className="block mb-1 font-medium">
                                    Your Name (optional)
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 p-2 w-full rounded"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                />
                            </div>

                            {/* Show success or error messages */}
                            {message && (
                                <div className="text-green-700 font-semibold">{message}</div>
                            )}
                            {error && (
                                <div className="text-red-700 font-semibold">{error}</div>
                            )}

                            <div className="flex justify-end space-x-3 mt-4">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 border rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={`px-4 py-2 rounded text-white font-semibold ${
                                        bookingInProgress
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                                    disabled={bookingInProgress}
                                >
                                    {bookingInProgress ? "Booking..." : "Confirm Booking"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookingPage;
