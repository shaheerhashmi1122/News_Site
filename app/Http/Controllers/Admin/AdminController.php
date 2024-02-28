<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $post = NewsData::count();
        $user = User::count();
        $new_user= User::where('created_at', '>=', now()->subMonth())->get()->count();
        $new_post= NewsData::where('created_at', '>=', now()->subMonth())->get()->count();
        $user_month = User::select(DB::raw("MONTH(created_at) as month, COUNT(id) as total"))
        ->groupBy(DB::raw("MONTH(created_at)"))
        ->orderBy(DB::raw("MONTH(created_at)"))
        ->pluck("total","month");
        $post_month = NewsData::select(DB::raw("MONTH(created_at) as month, COUNT(id) as total"))
        ->groupBy(DB::raw("MONTH(created_at)"))
        ->orderBy(DB::raw("MONTH(created_at)"))
        ->pluck("total","month");
        // dd($user_month); 
        // dd($new_user);
        return Inertia::render('Admin/Dashboard',[
            'posts' => $post,
            'user' => $user,
            'newuser' => $new_user,
            'newpost' => $new_post,
            'usermonth'=>$user_month,
            'postmonth'=>$post_month
        ]);
    }
}
