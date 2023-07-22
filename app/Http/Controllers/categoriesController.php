<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use App\Models\Category;
use App\Models\SelectedCategory;
use Illuminate\Http\Request;

class categoriesController extends Controller
{

    // Get All Categories
    public function getAllCategories()
    {
        $categories = Category::all();
        return $this->successResponse($categories);
    }

    // Get One Category Data
    public function getOneCategory(Request $request, $categoryId)
    {

        $animeIds = SelectedCategory::where('category_id', $categoryId)->select('anime_id')->pluck('anime_id');
        $anime = Anime::whereIn('id', $animeIds)->paginate($request->query('limit') ? $request->query('limit') : 10);
        return $this->successResponse($anime);
    }

    /*** Dashboard ***/

    public function getCategories()
    {
        $categories = Category::paginate(10);

        return $this->successResponse($categories);
    }

    public function deleteCategory($categoryId)
    {
        $category = Category::find($categoryId);

        $category->delete();

        return $this->successResponse(null, 'Category Deleted Successfully');
    }
}
