<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use Illuminate\Http\Request;

class globalController extends Controller {
    
    public function getHome() {
        $slider = Anime::orderBy('id', 'DESC')->take(10)->get();

        $home = [
            'slider' => $slider
        ];

        return $this->successResponse($home);
    }

}
