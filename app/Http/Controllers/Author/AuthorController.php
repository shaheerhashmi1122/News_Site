<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Author/Authordash');
    }

    public function upload_news()
    {
        return Inertia::render('Author/Editform');
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
        $auth = Auth::user()->id;
        $data = NewsData::all();
        return Inertia::render('Author/Tables',[
            'data'=>$data
        ]);
    }
public function update_news()
    {
        // return "Tables";
        return Inertia::render('Author/Update');
    }

    public function data()
    {
        $Newsdata=NewsData::all();
        return $Newsdata;    
    }
  
    public function edit($id)
    {
        $data_id=NewsData::find($id);
        return view('Author.update',get_defined_vars());
    }

    public function edit_form(Request $req)
    {
        $post=NewsData::find($req->id);
        $req->validate([
            'heading' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'text' => 'required',
        ]);

        $post->heading = $req->heading;
        $post->description = $req->description;
        $post->text = $req->text;
         //upload image:
         if($req->image){
         $image = $req->image;
         $imagename = time() . '.' . $image->getClientOriginalExtension();
         //store in public folder "product"
         $image->move('news', $imagename);
         $post->image = $imagename;
         }
        // dd($post);
        $post->save();
        return redirect()->back();
    }

    public function delete($id)
    {
        $data_id=NewsData::find($id);
        dd($data_id);
        $data_id->delete();
        return redirect()->back();
    }


}
