<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class episodesController extends Controller
{

    public function getEpisodes()
    {
        $episodes = Episode::paginate(10);

        return $this->successResponse($episodes);
    }

    public function getOneEpisode($episodeId)
    {

        $episode = Episode::find($episodeId);
        $nextEpisode = Episode::where('id', '>', $episode->id)->where('anime_id', '=', $episode->anime->id)->orderBy('id')->first();
        $prevEpisode = Episode::where('id', '<', $episode->id)->where('anime_id', '=', $episode->anime->id)->orderBy('id', 'desc')->first();

        $episode['next_episode'] = $nextEpisode;
        $episode['prev_episode'] = $prevEpisode;

        return $this->successResponse($episode);
    }

    public function addEpisodeComment(Request $request, $episodeId)
    {

        $validate = Validator::make($request->all(), [
            'comment' => 'required'
        ]);

        if ($validate->fails()) {
            return $this->errorResponse('Validation Error', $validate->errors(), 400);
        }

        $episode = Episode::find($episodeId);

        $episode->update([
            'comment' => $request->comment
        ]);

        return $this->successResponse(null, 'Comment Added Successfully');
    }
}
