<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use App\Models\Anime;
use App\Models\Episode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class globalController extends Controller
{

    public function getHome()
    {
        $slider = Anime::orderBy('id', 'DESC')->take(10)->get();
        $latestAnimes = Anime::orderBy('id', 'DESC')->take(8)->get();
        $topAnimes = Anime::orderBy('views', 'DESC')->take(8)->get();
        $trending = Anime::where('trend', '=', 1)->orderBy('id', 'DESC')->get();
        $latestEpisodes = Episode::orderBy('id', 'DESC')->take(8)->get();
        $mostLikes = DB::table('anime')->inRandomOrder()->limit(8)->get();
        $ads = DB::table('ads')
            ->inRandomOrder()
            ->limit(3)
            ->get();
        $home = [
            'slider' => $slider,
            'latest_anime' => $latestAnimes,
            'top_anime' => $topAnimes,
            'latest_episodes' => $latestEpisodes,
            'trend' => $trending,
            'ads' => $ads,
            'most_likes' => $mostLikes
        ];

        return $this->successResponse($home);
    }
}
