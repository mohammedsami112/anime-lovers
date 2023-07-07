<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use App\Models\Episode;
use Illuminate\Http\Request;

class animeController extends Controller {

    public function getOneAnime($animeId) {
        $anime = Anime::find($animeId);

        if ($anime == null) {
            return $this->errorResponse('Anime Not Found', []);
        }

        $animeEpisodes = Episode::where('anime_id', '=', $anime->id)->paginate(10);

        $data = [
            'anime' => $anime,
            'episodes' => $animeEpisodes
        ];

        return $this->successResponse($data);

    }

}
