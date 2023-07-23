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
        $type =  $request->query('type');
        $status =  $request->query('status');

        $anime = Anime::when($searchQuery, function ($query, $search) {
            return $query->where('title', 'LIKE', "%$search%");
        })->when($type, function ($query, $type) {
            return $query->where('type', 'LIKE', "%$type%");
        })->when($status, function ($query, $status) {
            return $query->where('status', 'LIKE', "%$status%");
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

    /*** Dashboard ***/

    public function getAllAnime()
    {
        $anime = Anime::paginate(10);

        return $this->successResponse($anime);
    }

    public function deleteAnime($animeId)
    {
        $anime = Anime::find($animeId);

        $anime->delete();

        return $this->successResponse(null, 'Anime Deleted Successfully');
    }
}
