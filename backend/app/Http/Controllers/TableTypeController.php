<?php

namespace App\Http\Controllers;

use App\Models\TableType;
use Illuminate\Http\Request;

class TableTypeController extends Controller
{
    public function index()
    {
        // Return all table types and their availability
        // e.g. [ { capacity: 2, available_count: 4 }, { capacity:4, ...}, ... ]
        $tableTypes = TableType::select('id', 'capacity', 'available_count')->get();
        return response()->json($tableTypes);
    }
}
