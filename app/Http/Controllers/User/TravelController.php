<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TravelController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('User/Travel');
    }
}
