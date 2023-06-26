<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Episode extends Model {
    use HasFactory, SoftDeletes;

    protected $table = 'anime_episodes';

    protected $guarded = [];

    protected $hidden = ['updated_at'];

    protected $with = ['anime'];

    public function anime() {
        return $this->hasOne(Anime::class, 'id', 'anime_id');
    }

}
