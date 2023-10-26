<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Initialise Google login process
     */
    public function login() {
        return Socialite::driver('google')
            ->with(['access_type' => 'offline'])
            ->redirect();
    }

    /**
     * Google callback function
     */
    public function callback() {
        $googleUser = Socialite::driver('google')->user();

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

        $this->incrementLoginCount(Auth::user());
        $this->updateCurrentLoginDate(Auth::user());

        return redirect('http://localhost:3000/projects/login-page/home');
    }

    /**
     * If Google calls the /api/auth/failure endpoint
     */
    public function failure() {
        return "Something went wrong";
    }

    /**
     * When logging out, update lastLogin variable, invalidate session & redirect to login page
     */
    public function logout(Request $req) {
        if ($req->user()) {
            $this->updateLastLogin($req->user());
        }

        Auth::logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return redirect('http://localhost:3000/projects/login-page');
    }

    /**
     * Provide relevant user data to the frontend
     */
    public function userData(Request $req) {
        if (!$req->user()) {
            
            // Not logged in
            return json_encode("");

        } else {

            // Logged in
            return json_encode([
                "user" => $req->user(),
            ]);

        }
    }

    // Private functions

    /**
     * This increments the variable tracking how many times the user has logged in
     */
    private function incrementLoginCount(User $user) {
        // Update given user with the user's loginCount plus 1
        $user->update(['loginCount' => $user->loginCount + 1]);
        $user->save();
    }
    
    /**
     * This sets the currentLoginDate to the current time & date when the user logs in
     */
    private function updateCurrentLoginDate(User $user) {
        // Update given user's currentLoginDate with current date
        $user->update(['currentLoginDate' => time()]);
    }
    
    /**
     * This sets the lastLogin variable to the currentLoginDate when the user logs out
     */
    private function updateLastLogin(User $user) {
        // Update given user's lastLogin with its value for currentLoginDate
        $user->update(['lastLogin' => $user->currentLoginDate]);
        $user->save();
    }
}
