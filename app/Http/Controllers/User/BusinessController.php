<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function dashboard()
    {
        $news = NewsData::where('category','2')->get();
        return Inertia::render('User/Business',['business'=>$news]);
    }
}
