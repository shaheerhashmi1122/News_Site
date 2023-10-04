<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TableController extends Controller
{
    public function show()
    {
        return Inertia::render('Admin/Tables');
    }
    public function data()
    {
        $data=User::all();
        return $data;
    }

}
