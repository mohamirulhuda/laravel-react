<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'username' => 'required|unique:users|alpha_num',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed'
        ]);

        $data['password'] = bcrypt($request->password);
        
        User::create($data);

        return response()->json([
            'message' => "You're Registered succesfully, Please Login!"
        ]);
    }
}
