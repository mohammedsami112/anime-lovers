<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class adsController extends Controller
{


    public function list()
    {
        $ads = Ad::paginate(10);

        return $this->successResponse($ads);
    }


    public function create(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required|image',
            'url' => 'required|url'
        ]);

        if ($validate->fails()) {
            return $this->errorResponse('Validation Error', $validate->errors(), 400);
        }

        $imageFile = $request->file('image');
        $imagesUploadPath = $imageFile->store('ads');

        Ad::create([
            'title' => $request->title,
            'image' => Storage::disk('local')->url($imagesUploadPath),
            'url' => $request->url
        ]);

        return $this->successResponse(null, 'Ad Added Successfully');
    }

    public function delete($adId)
    {
        $ad = Ad::find($adId);

        $ad->delete();

        return $this->successResponse(null, 'Ad Deleted Successfully');
    }
}
