<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use App\Models\Category;
use App\Models\Episode;
use App\Models\SelectedCategory;
use App\Models\Status;
use App\Models\Type;
use Illuminate\Http\Request;
use Goutte;
use Illuminate\Support\Facades\Storage;

class scrapersController extends Controller {

    // Categories
    public function categories() {
        $website = Goutte::request('GET', 'https://witanime.com/%d9%82%d8%a7%d8%a6%d9%85%d8%a9-%d8%a7%d9%84%d8%a7%d9%86%d9%85%d9%8a/');

        $categories = $website->filter('.anime-filter-options > ul li:nth-child(2) .dropdown ul li > a')->each(function($node) {
            return $node->text();
        });

        foreach ($categories as $category) {
            Category::create([
                'title' => $category
            ]);
        }

        return $categories;
    }

    // Statuses
    public function statuses() {
        $website = Goutte::request('GET', 'https://witanime.com/%d9%82%d8%a7%d8%a6%d9%85%d8%a9-%d8%a7%d9%84%d8%a7%d9%86%d9%85%d9%8a/');

        $statuses = $website->filter('.anime-filter-options > ul li:nth-child(3) .dropdown ul li > a')->each(function($node) {
            return $node->text();
        });

        foreach ($statuses as $status) {
            Status::create([
                'title' => $status
            ]);
        }


        return $statuses;
    }

    // Types
    public function types() {
        $website = Goutte::request('GET', 'https://witanime.com/%d9%82%d8%a7%d8%a6%d9%85%d8%a9-%d8%a7%d9%84%d8%a7%d9%86%d9%85%d9%8a/');

        $types = $website->filter('.anime-filter-options > ul li:nth-child(4) .dropdown ul li > a')->each(function($node) {
            return $node->text();
        });

        foreach ($types as $type) {
            Type::create([
                'title' => $type
            ]);
        }


        return $types;
    }


    // Anime
    public function anime(Request $request) {
        $website = Goutte::request('GET', $request->link);

        $title = $website->filter('.anime-details-title')->text();
        $thumbnail = $website->filter('.anime-thumbnail img')->attr('src');
        $categories = $website->filter('.anime-genres li > a')->each(function($node) {
            return $node->text();
        });
        $description = $website->filter('.anime-story')->text();
        $info = $website->filter('.anime-info')->each(function($node) {
            return $node->innerText() == "" ? $node->filter('a')->text() : $node->innerText();
        });
        $trailer = $website->filter('.anime-external-links .anime-trailer')->attr('href');
        $mal_site = $website->filter('.anime-external-links .anime-mal')->attr('href');
        $episodes = $website->filter('.episodes-list-content .DivEpisodeContainer')->each(function($node) {
            $title = $node->filter('.episodes-card-title h3 a')->text();
            $thumbnail = $node->filter('.episodes-card-container  img.img-responsive')->attr('src');
            $episodePage = Goutte::click($node->selectLink($node->filter('a.overlay')->text())->link());

            // Episode Page
            $page = $episodePage->filter('#episode-watch-content')->each(function($node) {
                return $node->filter('#episode-servers li > a')->each(function($node) {
                    return [
                        'title' => $node->text(),
                        'embed_url' => $node->attr('data-ep-url')
                    ];
                });
            });

            return [
                'title' => $title,
                'thumbnail' => $thumbnail,
                'servers' => $page[0]
            ];
        });

        $animeData = [
            'title' =>  $title,
            'thumbnail' => $thumbnail,
            'categories' => $categories,
            'description' => $description,
            'teaser' => $trailer,
            'mal_site' => $mal_site,
            'type' => $info[0],
            'start_from' => $info[1],
            'status' => $info[2],
            'source' => $info[6],
            'episodes' => $episodes
        ];


        /** Create Anime Profile **/
        // Upload Thumbnail
        $thumbnailUrl = explode('/', parse_url($animeData['thumbnail'], PHP_URL_PATH));
        $thumbnailName = array_pop($thumbnailUrl);
        $thumbnailNewName = md5(rand(0, 999999999)) . '.' . pathinfo($thumbnailName, PATHINFO_EXTENSION);
        Storage::disk('local')->put("thumbnails/{$thumbnailNewName}", file_get_contents($animeData['thumbnail']));

        // Create Profile
        $animeProfile = Anime::create([
            'title' => $animeData['title'],
            'thumbnail' => $thumbnailNewName,
            'description' => $animeData['description'],
            'type' => Type::where('title', '=', "{$animeData['type']}")->first()->id,
            'status' => Status::where('title', '=', "{$animeData['status']}")->first()->id,
            'source' => $animeData['source'],
            'start_from' => $animeData['start_from'],
            'teaser' => $animeData['teaser'],
            'mal_site' => $animeData['mal_site']
        ]);

        // Add Anime Categories
        foreach ($animeData['categories'] as $category) {
            $selectedCategory = Category::where('title', '=', trim($category))->first()->id;
            SelectedCategory::create([
                'anime_id' => $animeProfile->id,
                'category_id' => $selectedCategory
            ]);
        }

        // Add Anime Episodes
        foreach ($animeData['episodes'] as $episode) {
            // Upload Episode Thumbnail
            $episodeThumbnailUrl = explode('/', parse_url($episode['thumbnail'], PHP_URL_PATH));
            $episodeThumbnailName = array_pop($episodeThumbnailUrl);
            $episodeThumbnailNewName = md5(rand(0, 999999999)) . '.' . pathinfo($episodeThumbnailName, PATHINFO_EXTENSION);
            Storage::disk('local')->put("episodes/thumbnails/{$episodeThumbnailNewName}", file_get_contents($episode['thumbnail']));

            // Add Episode
            Episode::create([
                'anime_id' => $animeProfile->id,
                'title' => $episode['title'],
                'servers' => json_encode($episode['servers']),
                'thumbnail' => $episodeThumbnailNewName,
            ]);

        }

        return $this->successResponse($animeData, 'Anime Scraped Successfully');

    }

}