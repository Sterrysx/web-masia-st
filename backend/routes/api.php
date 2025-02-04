<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\BookingController;
use App\Http\Controllers\TableTypeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return response()->json(['message' => 'API root']);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function () {
    return response()->json(['message' => 'Hello from Laravel Backend!']);
});

Route::get('/table-availability', [TableTypeController::class, 'index']);


// Bookings route
Route::post('/bookings', [BookingController::class, 'store']);


// routes/api.php
Route::get('/bookings', [BookingController::class, 'index']);
