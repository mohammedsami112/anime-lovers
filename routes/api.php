<?php

use App\Http\Controllers\animeController;
use App\Http\Controllers\authController;
use App\Http\Controllers\categoriesController;
use App\Http\Controllers\episodesController;
use App\Http\Controllers\globalController;
use App\Http\Controllers\scrapersController;
use App\Http\Controllers\usersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Auth
Route::group(['prefix' => 'auth', 'controller' => authController::class], function () {
    Route::post('login', 'login');
    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('change-password', 'changePassword');
        Route::post('logout', 'logout');
    });
});

Route::group(['middleware' => ['auth:sanctum', 'check.admin']], function () {

    // Scrapers
    Route::group(['prefix' => 'scrapers', 'controller' => scrapersController::class], function () {
        Route::get('categories', 'categories');
        Route::get('statuses', 'statuses');
        Route::get('types', 'types');
        Route::get('episode', 'episode');
        Route::get('anime', 'anime');
    });

    // Users
    Route::group(['prefix' => 'users', 'controller' => usersController::class], function () {
        Route::get('/', 'getUsers');
        Route::post('/create', 'createUser');
        Route::post('/update/{userId}', 'updateUser');
        Route::post('/delete/{userId}', 'deleteUser');
    });

    // Categories
    Route::group(['prefix' => 'dashboard-categories', 'controller' => categoriesController::class], function () {
        Route::get('/', 'getCategories');
        Route::post('/delete/{categoryId}', 'deleteCategory');
    });

    // Anime
    Route::group(['prefix' => 'dashboard-anime', 'controller' => animeController::class], function () {

        Route::get('/', 'getAllAnime');
    });
});


// Categories
Route::group(['prefix' => 'categories', 'controller' => categoriesController::class], function () {
    Route::get('/', 'getAllCategories');
    Route::get('/{categoryId}', 'getOneCategory');
});

// Anime
Route::group(['prefix' => 'anime', 'controller' => animeController::class], function () {
    Route::get('/', 'getAnime');
    Route::post('/trend/{animeId}', 'trendAnime');
    Route::post('/delete/{animeId}', 'deleteAnime');
    Route::get('/{animeId}', 'getOneAnime');
});

// Episodes
Route::group(['prefix' => 'episodes', 'controller' => episodesController::class], function () {

    Route::get('/', 'getEpisodes');
    Route::get('/{episodeId}', 'getOneEpisode');
});

// Global
Route::group(['controller' => globalController::class], function () {
    Route::get('/home', 'getHome');
});
