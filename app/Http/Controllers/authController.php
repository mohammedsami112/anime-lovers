<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class authController extends Controller
{

    public function login(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validate->fails()) {
            return $this->errorResponse('Validation Error', $validate->errors());
        }


        if (Request('type') == 'dashboard') {
            if (!Auth::attempt(['email' => $request->email, 'password' => $request->password, 'type' => 'admin'])) {
                return $this->errorResponse('Unauthorized', ['error' => 'Email Or Password Invalid'], 401);
            }
        }

        $user = Auth::user();
        $success['token'] = $user->createToken('authToken')->plainTextToken;
        $success['user'] = $user;

        return $this->successResponse($success, 'Login Successfully',);
    }

    public function changePassword(Request $request)
    {

        $user = User::find(Auth::user()->id);
        $validate = Validator::make($request->all(), [
            'old_password' => 'required',
            'new_password' => 'required',
            'c_password' => 'required|same:new_password'
        ]);

        if ($validate->fails()) {
            return $this->errorResponse('Validation Error', $validate->errors());
        }

        if (!Hash::check($request->old_password, $user->password)) {
            return $this->errorResponse('Validation Error', ['error' => 'Old Password Invalid']);
        }

        $user->update([
            'password' => Hash::make($request->new_password)
        ]);

        return $this->successResponse(null, 'Password Changed Successfully');
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
        return $this->successResponse(null, 'Logout Successfully');
    }
}
