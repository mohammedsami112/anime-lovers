<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController {
    use AuthorizesRequests, ValidatesRequests;

    public function successResponse($result, $message = 'success') {

        $response = [
            'success'   => true,
            'data'      => $result,
            'message'   => $message
        ];

        return response()->json($response, 200);

    }


    // Error Response

    public function errorResponse($error, $errorMessages = [], $code = 404) {
        $response = [
            'success' => false,
            'message' => $error
        ];

        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);

    }

}
