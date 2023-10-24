<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Auth;

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

// These endpoints must use web middleware as they redirect the page
Route::group(['middleware' => ['web']], function () {
    
    // Not really needed, just another way to login
    Route::get('/', function () {
        return '<a href="/api/auth/google">Login with Google</a>';
    });
    
    // The link clicked by the user when logging in. Initialises Google login process.
    Route::get('/auth/google', function () {
        return Socialite::driver('google')
            ->with(['access_type' => 'offline'])
            ->redirect();
    });
    
    // The callback function used by Google. Provides user info to backend.
    Route::get('/auth/google/callback', function () {
        $googleUser = Socialite::driver('google')->user();

        //return $googleUser->user['given_name'];

        $user = User::updateOrCreate([
            'google_id' => $googleUser->id,
        ], [
            'username' => $googleUser->name,
            'firstname' => $googleUser->user['given_name'],
            'thumbnail' => $googleUser->user['picture'],
            'email' => $googleUser->email,
            'google_token' => $googleUser->token,
            'google_refresh_token' => $googleUser->refreshToken,
        ]);

        Auth::login($user);

        incrementLoginCount(Auth::user());
        updateCurrentLoginDate(Auth::user());

        return redirect('http://localhost:3000/projects/login-page/home');
    });

    // Log a message in console if /api/auth/failure is called by Google
    Route::get('/auth/failure', function () {
        return "Something went wrong";
    });

    // This endpoint provides the relevant user data to the frontend
    Route::get('/user_data', function (Request $req) {

        if (!$req->user()) {
            
            // Not logged in
            return json_encode("");

        } else {

            // Logged in
            return json_encode([
                "user" => $req->user(),
            ]);

        }
    });

    Route::get('/logout', function (Request $req) {

        if ($req->user()) {
            updateLastLogin($req->user());
        }

        Auth::logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return redirect('http://localhost:3000/projects/login-page');
    });

    Route::get('/posts/{id}', [PostController::class, 'getAllPosts']);
    Route::post('/posts/{id}', [PostController::class, 'newPost']);

    Route::get('/csrf', function (Request $req) {
        return json_encode(['token' => csrf_token()]);
    });
});

function incrementLoginCount(User $user) {
    // Update given user with the user's loginCount plus 1
    $user->update(['loginCount' => $user->loginCount + 1]);
    $user->save();
}

function updateLastLogin(User $user) {
    // Update given user's lastLogin with its value for currentLoginDate
    $user->update(['lastLogin' => $user->currentLoginDate]);
    $user->save();
}

function updateCurrentLoginDate(User $user) {
    // Update given user's currentLoginDate with current date
    $user->update(['currentLoginDate' => time()]);
}

