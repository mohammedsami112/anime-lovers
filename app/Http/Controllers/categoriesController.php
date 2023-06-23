<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class categoriesController extends Controller {

    // Get All Categories
    public function getAllCategories() {
        $categories = Category::all();
        return $this->successResponse($categories);
    }

}
