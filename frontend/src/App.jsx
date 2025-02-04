// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import the pages/components used for the routes
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
// Added missing import for the admin availability page:
import AdminAvailabilityPage from "./pages/AdminAvailabilityPage"; // Ensure the filename/path matches your file structure
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            {/* Navigation Bar */}
            <nav className="bg-gray-800 p-4 text-white flex space-x-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/booking" className="hover:text-gray-300">Booking</Link>
                <Link to="/admin" className="hover:text-gray-300">Admin</Link>
            </nav>

            {/* Define application routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/admin" element={<AdminAvailabilityPage />} />
            </Routes>
        </Router>
    );
}

export default App;
