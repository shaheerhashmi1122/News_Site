<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SportController extends Controller
{
    public function dashboard()
    {
        $auth = Auth::user();
        $news = NewsData::where('category','4')->get();
        $head_news = NewsData::orderBy('id', 'DESC')->limit(5)->get();
        return Inertia::render('User/Sports',[
            'sports'=>$news,
            'auth'=>$auth,
            'head'=>$head_news
        ]);
    }
}
