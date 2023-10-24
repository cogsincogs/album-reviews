<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class PostController extends Controller
{
    /**
     * Get all posts for a given user
     */
    public function getAllPosts(string $id): string
    {
        $user = User::findOrFail($id);
        return json_encode($user->postsArray);
    }

    /**
     * Push new post to user's postsArray
     */
    public function newPost(Request $req, string $id) {
        $user = User::findOrFail($id);
        $content = $req->content;
        $newPost = [
            'date' => time(),
            'content' => $content,
        ];
        $postsArray = $user->postsArray;
        array_push($postsArray, $newPost);
        $user->update(['postsArray' => $postsArray]);
        $user->save();
    }
}
