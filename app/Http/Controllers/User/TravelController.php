<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TravelController extends Controller
{
    public function dashboard()
    {
        $news = NewsData::where('category','6')->get();
        return Inertia::render('User/Travel',['travel'=>$news]);
    }
}
