// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

function App() {
    return (
        <Router>
            {/* Nav / Header */}
            <nav className="bg-gray-800 p-4 text-white flex space-x-4">
                <Link to="/" className="hover:text-gray-300">
                    Home
                </Link>
                <Link to="/booking" className="hover:text-gray-300">
                    Booking
                </Link>
            </nav>

            {/* Main Routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
