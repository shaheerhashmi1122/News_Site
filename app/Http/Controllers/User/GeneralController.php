<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralController extends Controller
{
    public function dashboard()
    {
        $news = NewsData::where('category','1')->get();
        // dd($news);
        return Inertia::render('User/General',
        ['data'=>$news
        ]);
    }
}
