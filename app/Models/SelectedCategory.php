<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelectedCategory extends Model {
    use HasFactory;

    protected $table = 'anime_category';

    protected $fillable = ['anime_id', 'category_id'];

}
