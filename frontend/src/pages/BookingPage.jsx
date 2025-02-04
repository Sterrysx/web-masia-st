// src/pages/BookingPage.jsx
import React from "react";
import BookingForm from "../components/BookingForm";

function BookingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-100 flex flex-col items-center py-10">
            {/* Header / Title */}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 max-w-2xl w-full">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
                    Reserve Your Table
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Plan your next visit to our restaurant. Book below!
                </p>
                <BookingForm />
            </div>

            {/* A little extra content / info section below, if needed */}
            <div className="max-w-2xl w-full text-center">
                <h2 className="text-xl font-semibold mb-2">Have Questions?</h2>
                <p className="text-gray-700">
                    Call us at <span className="font-bold text-blue-600">(123) 456-7890</span> or email us at{" "}
                    <span className="font-bold text-blue-600">info@restaurant.com</span>.
                </p>
            </div>
        </div>
    );
}

export default BookingPage;
