<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SportController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('User/Sports');
    }
}
