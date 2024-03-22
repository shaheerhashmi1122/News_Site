<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function dashboard()
    {
        $auth = Auth::user();
        $latest_news = NewsData::orderBy('id', 'DESC')->limit(3)->get();
        // dd($latest_news);
        $head_news = NewsData::orderBy('id', 'DESC')->limit(5)->get();
        return Inertia::render('User/UserDash',[
            'latest'=>$latest_news,
            'auth'=>$auth,
            'head'=>$head_news
    ]);
    }

    public function profile($id)
    {
        $auth = User::find($id);
        // dd($auth);
        return inertia::render('User/Edit',[
            'profile'=>$auth
        ]);
    }

    public function edit_profile(Request $request,$id){
        $user =User::whereId($id)->firstOrFail();
        $user->update([
            "name"=>$request->input("name"),
            "email"=>$request->input("email"),
            "password"=>bcrypt($request->input("password")),
        ]);
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
