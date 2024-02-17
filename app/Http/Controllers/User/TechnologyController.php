<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TechnologyController extends Controller
{
    public function dashboard()
    {
        $news = NewsData::where('category','5')->get();
        return Inertia::render('User/Technology',['technology'=>$news]);
    }
}
