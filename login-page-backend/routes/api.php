<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => ['web']], function () {
    
    Route::get('/auth/google', [AuthController::class, 'login']);
    Route::get('/auth/google/callback', [AuthController::class, 'callback']);
    Route::get('/auth/failure', [AuthController::class, 'failure']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::get('/user_data', [AuthController::class, 'userData']);

    Route::get('/posts/{id}', [PostController::class, 'getAllPosts']);
    Route::post('/posts/{id}', [PostController::class, 'newPost']);
    Route::patch('/posts/{id}', [PostController::class, 'editPost']);
    Route::delete('/posts/{id}', [PostController::class, 'deletePost']);

    Route::get('/csrf', function (Request $req) {
        return json_encode(['token' => csrf_token()]);
    });
});

