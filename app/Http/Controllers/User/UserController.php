<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function dashboard()
    {
        $latest_news = NewsData::orderBy('id', 'DESC')->get();
        // dd($latest_news);
        return Inertia::render('User/UserDash',['latest'=>$latest_news]);
    }
}
