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

    public function add_news(Request $request)
    {
        $request->validate([
            'heading' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'text' => 'required',
        ]);

        $newsdata = NewsData::create([
            'heading' => $request->heading,
            'description' => $request->description,
            'text' => $request->text,
        ]);
        // dd($newsdata);
        $newsdata->save();
        return redirect()->back();
    }
}
