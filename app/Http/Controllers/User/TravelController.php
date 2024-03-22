<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TravelController extends Controller
{
    public function dashboard()
    {
        $auth = Auth::user();
        $news = NewsData::where('category','6')->get();
        $head_news = NewsData::orderBy('id', 'DESC')->limit(5)->get();
        return Inertia::render('User/Travel',[
            'travel'=>$news,
            'auth'=>$auth,
            'head'=>$head_news
        ]);
    }
}
