<?php

use App\Http\Controllers\categoriesController;
use App\Http\Controllers\globalController;
use App\Http\Controllers\scrapersController;
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

// Scrapers
Route::group(['prefix' => 'scrapers', 'controller' => scrapersController::class], function() {
    Route::get('categories', 'categories');
    Route::get('statuses', 'statuses');
    Route::get('types', 'types');
    Route::get('anime', 'anime');
});

// Categories
Route::group(['prefix' => 'categories', 'controller' => categoriesController::class], function() {
    Route::get('/', 'getAllCategories');
});

// Global

Route::group(['controller' => globalController::class], function() {

    Route::get('/home', 'getHome');

});
