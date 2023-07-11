<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Anime extends Model {
    use HasFactory, SoftDeletes;

    protected $table = 'anime';

    protected $guarded = [];

    protected $hidden = ['updated_at', 'deleted_at', 'type', 'status'];

    protected $appends = ['slug'];

    protected $with = ['anime_type', 'anime_status', 'anime_categories'];

    public function getSlugAttribute() {
        return strtolower(str_replace(' ', '-', $this->title));
    }

    public function anime_type() {
        return $this->hasOne(Type::class, 'id', 'type');
    }

    public function anime_status() {
        return $this->hasOne(Status::class, 'id', 'status');
    }

    public function anime_categories() {
        return $this->hasMany(SelectedCategory::class, 'anime_id', 'id');
    }

}