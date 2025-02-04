<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\TableType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'capacity' => 'required|in:2,4,6',
            'customer_name' => 'nullable|string'
        ]);

        // We'll keep it ultra-simple:
        // - Find the table type by capacity
        // - Decrement available_count
        // - Create a booking record if available_count > 0

        return DB::transaction(function() use ($validatedData) {
            $tableType = TableType::where('capacity', $validatedData['capacity'])->firstOrFail();
            if ($tableType->available_count <= 0) {
                return response()->json(['error' => 'No tables of this capacity left!'], 400);
            }

            $tableType->available_count--;
            $tableType->save();

            // Create the booking with fixed date/time if you want
            $booking = Booking::create([
                'table_type_id' => $tableType->id,
                'date' => '2025-02-08', // or '2025-02-08' for your single event
                'time' => '14:00:00',
                'customer_name' => $validatedData['customer_name'] ?? null
            ]);

            return response()->json([
                'message' => 'Booked successfully!',
                'data' => $booking
            ], 201);
        });
    }

    public function index()
    {
        // Return the most recent bookings, or whatever you want
        // Possibly with relationship data
        $bookings = Booking::with('tableType')->orderBy('created_at','desc')->get();
        return response()->json($bookings);
    }

}
