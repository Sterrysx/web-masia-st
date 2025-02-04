// src/services/bookingService.js
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";
// Adjust if you're on a different host/port

// Get the current availability of table types
export async function fetchTableAvailability() {
    const response = await axios.get(`${API_URL}/table-availability`);
    return response.data; // e.g. [ {id:1, capacity:2, available_count:4}, ... ]
}

// Book a specific table type
export async function bookTable(capacity, customer_name) {
    // We only need to send capacity and optional name
    const response = await axios.post(`${API_URL}/bookings`, {
        capacity,
        customer_name,
    });
    return response.data; // e.g. { message: '...', data: {...} }
}
