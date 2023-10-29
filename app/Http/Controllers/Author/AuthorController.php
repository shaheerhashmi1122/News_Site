<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Author/authordash');
    }

    public function add_news(Request $req)
    {
        $post = new NewsData();
        $req->validate([
            'heading' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'text' => 'required',
            'image' => 'required'
        ]);

        $post->heading = $req->heading;
        $post->description = $req->description;
        $post->text = $req->text;
         //upload image:
         $image = $req->image;
         $imagename = time() . '.' . $image->getClientOriginalExtension();
         //store in public folder "product"
         $image->move('news', $imagename);
         $post->image = $imagename;
        // dd($post);
        $post->save();
        return redirect()->back();
    }

    public function show_data()
    {
        // return "Tables";
        return Inertia::render('Author/tables');
    }
}
