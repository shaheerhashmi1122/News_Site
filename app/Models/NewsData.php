<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsData extends Model
{
    use HasFactory;

    protected $fillable = [
       'heading',
       'description',
       'text',
       'user_id',
       'total_views',
       'image',
    ];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
