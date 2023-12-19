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
        return Inertia::render('Author/UploadNews');
    }
    public function viewNews($id)
    {
        $viewdata = NewsData::find($id);
        return Inertia::render('Author/ViewNews',[
            'NewsData' => $viewdata
        ]);
    }
    public function add_news(Request $req)
    {
        $req->validate([
            'heading' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'text' => 'required',
            'category' => 'required',
            'image' => 'required'
        ]);
        // dd($req->all());
        $post = new NewsData();

        $post->user_id = Auth::user()->id;
        $post->heading = $req->heading;
        $post->description = $req->description;
        $post->text = $req->text;
        $post->category = $req->category;
         //upload image:
         $image = $req->image;
         $imagename = time() . '.' . $image->getClientOriginalExtension();
         //store in public folder "product"
         $image->move('news', $imagename);
         $post->image = $imagename;
        // dd($post);
        $post->save();
        return Inertia::render('Author/Tables')->with('success', 'Record Uploaded Successfully');
    }

    public function show_data()
    {
        $auth = Auth::user()->id;
        $data = NewsData::all();
        return Inertia::render('Author/Tables',[
            'data'=>$data
        ]);
    }

    public function update_news($id)
    {
        $data = NewsData::find($id);
        return Inertia::render('Author/Update',[
            'NewsData' => $data
        ]);
    }

    public function data()
    {
        $Newsdata=NewsData::all();
        return $Newsdata;    
    }

    public function edit_form(Request $req)
    {
        
        $req->validate([
            'heading' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'text' => 'required',
        ]);
    
        // Check if the record with the given ID exists
        $post = NewsData::find($req->id);
    
        if (!$post) {
            // Handle the case where the record doesn't exist 
            return redirect()->back()->with('error', 'Record not found');
        }
    
        // Update the attributes using the update method
        $post->update([
            'heading' => $req->heading,
            'description' => $req->description,
            'text' => $req->text,
        ]);
        // Upload image if provided and it's not a string (file name)
        if ($req->hasFile('image') && is_a($req->file('image'), 'Illuminate\Http\UploadedFile')) {
            $this->uploadImage($req->file('image'), $post);
        }
        return Inertia::render('Author/Tables')->with('success', 'Record updated successfully');
    }
    
    // Separate method for handling image upload
    private function uploadImage($image, $post)
    {
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move('news', $imageName);
        $post->image = $imageName;
        $post->save(); // Save the record after updating the image
    }
    

    public function delete($id)
    {
        $data_id=NewsData::find($id);
        // dd($data_id);
        $data_id->delete();
        return redirect()->back();
    }


}
