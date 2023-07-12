<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use App\Models\Episode;
use Illuminate\Http\Request;

class animeController extends Controller
{

    public function getAnime(Request $request)
    {
        $searchQuery = $request->query('search');
        $anime = Anime::when($searchQuery, function ($query, $search) {
            return $query->where('title', 'LIKE', "%$search%");
        })->paginate(10);


        return $this->successResponse($anime);
    }

    public function getOneAnime($animeId)
    {
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
