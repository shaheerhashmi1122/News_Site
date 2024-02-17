<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsData;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReadMoreController extends Controller
{
 public function readmore($id)
 {
   $read =NewsData::find($id);
  //  dd( $read );
  $read->increment('total_views');
   $result = DB::table('news_data')
   ->leftJoin('users','users.id','=','news_data.user_id')
   ->select('users.name as name','users.email as email','news_data.heading as heading','news_data.description as description','news_data.text as text','news_data.image as image','news_data.total_views as total_views')->where('news_data.id',$read->id)->get();
  //  dd($result);
    return Inertia::render('User/ReadMore',['readmore'=>$result]);
 }
}
