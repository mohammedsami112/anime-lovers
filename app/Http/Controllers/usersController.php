<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class usersController extends Controller
{
    public function getUsers()
    {
        $users = User::paginate(10);
        return $this->successResponse($users);
    }

    public function createUser(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'type' => 'required',
            'password' => 'required',
            'c_password' => 'required'
        ]);

        if ($validate->fails()) {
            return $this->errorResponse('Validation Error', $validate->errors());
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'type' => $request->type,
            'password' => Hash::make($request->password)
        ]);

        return $this->successResponse(null, 'User Created Successfully');
    }

    public function updateUser(Request $request, $userId)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email,' . $userId,
            'type' => 'required'
        ]);

        if ($validate->fails()) {
            return $this->errorResponse('Validation Error', $validate->errors());
        }

        $user = User::find($userId);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'type' => $request->type
        ]);

        return $this->successResponse(null, 'User Updated Successfully');
    }

    public function deleteUser($userId)
    {
        $user = User::find($userId);
        $user->delete();
        return $this->successResponse(null, 'User Deleted Successfully');
    }
}
