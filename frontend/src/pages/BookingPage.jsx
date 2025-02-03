// src/pages/BookingPage.jsx
import React from "react";
import BookingForm from "../components/BookingForm";

function BookingPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            <div className="w-full max-w-2xl p-4 mt-8">
                <h1 className="text-2xl font-bold mb-4">Make a Reservation</h1>
                <BookingForm />
            </div>
        </div>
    );
}

export default BookingPage;
