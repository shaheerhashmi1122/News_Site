<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TableController extends Controller
{
    public function show()
    {
        $user=User::where('role','user')->get();
        $author=User::where('role','author')->get();
        $post = NewsData::count();
        $user_count = User::count();
        $new_user= User::where('created_at', '>=', now()->subMonth())->get()->count();
        $new_post= NewsData::where('created_at', '>=', now()->subMonth())->get()->count();
        // dd($data);
        return Inertia::render('Admin/Tables',[
            'data' => $user,
            'author' => $author,
            'posts' => $post,
            'user' => $user_count,
            'newuser' => $new_user,
            'newpost' => $new_post,
          ]);
    }

}
