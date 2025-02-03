// src/services/bookingService.js

export async function createBooking({ date, time, guests }) {
    try {
        const response = await fetch("/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ date, time, guests }),
        });

        if (!response.ok) {
            // Handle 4xx or 5xx errors
            throw new Error("Failed to create booking");
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
