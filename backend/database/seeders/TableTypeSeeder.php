<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TableType;

class TableTypeSeeder extends Seeder
{
    public function run()
    {
        TableType::create(['capacity' => 2, 'available_count' => 4]);
        TableType::create(['capacity' => 4, 'available_count' => 3]);
        TableType::create(['capacity' => 6, 'available_count' => 3]);
    }
}

