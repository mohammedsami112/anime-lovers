<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use App\Models\Episode;
use Illuminate\Http\Request;

class globalController extends Controller {
    
    public function getHome() {
        $slider = Anime::orderBy('id', 'DESC')->take(10)->get();
        $latestAnimes = Anime::orderBy('id', 'DESC')->take(8)->get();
        $topAnimes = Anime::orderBy('views', 'DESC')->take(8)->get();
        $latestEpisodes = Episode::orderBy('id', 'DESC')->take(8)->get();
        $home = [
            'slider' => $slider,
            'latest_anime' => $latestAnimes,
            'top_anime' => $topAnimes,
            'latest_episodes' => $latestEpisodes,
        ];

        return $this->successResponse($home);
    }

}
