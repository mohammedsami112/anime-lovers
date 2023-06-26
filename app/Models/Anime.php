<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Anime extends Model {
    use HasFactory, SoftDeletes;

    protected $table = 'anime';

    protected $guarded = [];

    protected $hidden = ['updated_at', 'deleted_at'];

    protected $appends = ['slug'];

    public function getSlugAttribute() {
        return strtolower(str_replace(' ', '-', $this->title));
    }

}
