<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GeneralController extends Controller
{
    public function dashboard()
    {
        $auth = Auth::user();
        $news = NewsData::where('category','1')->get();
        $head_news = NewsData::orderBy('id', 'DESC')->limit(5)->get();
        // dd($news);
        return Inertia::render('User/General',
        ['data'=>$news,
        'auth'=>$auth,
        'head'=>$head_news
        ]);
    }
}
