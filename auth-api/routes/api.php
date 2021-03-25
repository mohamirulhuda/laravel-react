<?php

use App\Http\Controllers\Auth\{
    LoginController,
    LogoutController,
    MeController,
    RegisterController
};
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', RegisterController::class);
Route::post('login', LoginController::class);

Route::middleware('auth:sanctum')->group(function (){
    Route::get('me', MeController::class);
    Route::post('logout', LogoutController::class);
});