<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TableController extends Controller
{
    public function show()
    {
        $user=User::where('role','user')->get();
        $author=User::where('role','author')->get();
        // dd($data);
        return Inertia::render('Admin/Tables',[
            'data' => $user,
            'author' => $author
          ]);
    }
    public function data()
    {
        
    }

}
