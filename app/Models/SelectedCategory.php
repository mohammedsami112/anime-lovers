<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelectedCategory extends Model {
    use HasFactory;

    protected $table = 'anime_category';

    protected $fillable = ['anime_id', 'category_id'];

    protected $hidden = ['created_at', 'updated_at', 'anime_id', 'category_id'];

    protected $with = ['category'];

    public function category() {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }

}
