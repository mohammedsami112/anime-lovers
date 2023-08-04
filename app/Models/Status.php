<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Status extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'anime_status';

    protected $fillable = ['title'];

    protected $hidden = ['updated_at', 'deleted_at', 'created_at'];

}