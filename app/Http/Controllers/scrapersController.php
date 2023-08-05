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
use Goutte\Client;
use Illuminate\Support\Facades\Storage;

class scrapersController extends Controller
{

    // Get YonaPlay Servers
    private function getAnimeServers($serversList)
    {
        foreach ($serversList as $index => $server) {
            if (parse_url($server['embed_url'])['host'] == 'yonaplay.org') {
                $serverPage = Goutte::request('GET', $server['embed_url'], ['headers' => ['Referer' => 'https://witanime.org/']]);
                return $serverPage->filter('.OptionsLangDisp .ODDIV li')->each(function ($node) {
                    $title = $node->filter('p')->text() . ' ' . $node->filter('span')->text();
                    $htmlDom = new \DOMDocument;

                    @$htmlDom->loadHTML(preg_replace('/(((http|https|ftp|ftps)\:\/\/)|(www\.))[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\:[0-9]+)?(\/\S*)?/', '<a href="$0" target="_blank" rel="noopener noreferrer">$0</a>', $node->attr('onclick')));
                    $links = $htmlDom->getElementsByTagName('a');

                    $extractedLinks = [];
                    foreach ($links as $link) {
                        $extractedLinks = ['title' => $title, 'embed_url' => $link->textContent];
                    }

                    return $extractedLinks;
                });
            } else {
                return null;
            }
        }
    }

    // Categories
    public function categories()
    {
        $website = Goutte::request('GET', 'https://witanime.com/%d9%82%d8%a7%d8%a6%d9%85%d8%a9-%d8%a7%d9%84%d8%a7%d9%86%d9%85%d9%8a/');

        $categories = $website->filter('.anime-filter-options > ul li:nth-child(2) .dropdown ul li > a')->each(function ($node) {
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
    public function statuses()
    {
        $website = Goutte::request('GET', 'https://witanime.com/%d9%82%d8%a7%d8%a6%d9%85%d8%a9-%d8%a7%d9%84%d8%a7%d9%86%d9%85%d9%8a/');

        $statuses = $website->filter('.anime-filter-options > ul li:nth-child(3) .dropdown ul li > a')->each(function ($node) {
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
    public function types()
    {
        $website = Goutte::request('GET', 'https://witanime.com/%d9%82%d8%a7%d8%a6%d9%85%d8%a9-%d8%a7%d9%84%d8%a7%d9%86%d9%85%d9%8a/');

        $types = $website->filter('.anime-filter-options > ul li:nth-child(4) .dropdown ul li > a')->each(function ($node) {
            return $node->text();
        });

        foreach ($types as $type) {
            Type::create([
                'title' => $type
            ]);
        }


        return $types;
    }

    // Episode
    public function episode(Request $request)
    {
        $website = Goutte::request('GET', $request->link);

        $title = $website->filter('.all-episodes-list li.episode-active a')->text();
        $thumbnail = array_values(array_filter(Goutte::click($website->selectLink($website->filter('.anime-page-link a')->text())->link())->filter('.episodes-list-content .DivEpisodeContainer')->each(function ($node) use ($title) {
            if ($node->filter('.episodes-card-title h3 a')->text() == $title) {
                return $node->filter('.episodes-card-container  img.img-responsive')->attr('src');
            } else {
                return null;
            }
        }), fn ($item) => null !== $item))[0];

        $servers = $website->filter('#episode-watch-content')->each(function ($node) {
            return $node->filter('#episode-servers li > a')->each(function ($node) {
                return [
                    'title' => $node->text(),
                    'embed_url' => $node->attr('data-ep-url')
                ];
            });
        });

        // Episode Download
        $download = $website->filter('.episode-download-container')->each(function ($node) {
            return $node->filter('.quality-list li:not(li:first-child) > a')->each(function ($node) {
                return [
                    'title' => $node->text(),
                    'url' => $node->attr('href')
                ];
            });
        });

        // Upload Episode Thumbnail
        $episodeThumbnailUrl = explode('/', parse_url($thumbnail, PHP_URL_PATH));
        $episodeThumbnailName = array_pop($episodeThumbnailUrl);
        $episodeThumbnailNewName = md5(rand(0, 999999999)) . '.' . pathinfo($episodeThumbnailName, PATHINFO_EXTENSION);
        Storage::disk('local')->put("episodes/thumbnails/{$episodeThumbnailNewName}", file_get_contents($thumbnail));

        // Add Episode
        $episode = Episode::create([
            'anime_id' => $request->anime,
            'title' => $title,
            'servers' => json_encode($this->getAnimeServers($servers[0]) == null ? $servers[0] : array_merge($servers[0], $this->getAnimeServers($servers[0]))),
            'thumbnail' => $episodeThumbnailNewName,
            'download' => $download[0]
        ]);

        return $this->successResponse($episode, 'Episode Scraped Successfully');
    }

    // Anime
    public function anime(Request $request)
    {
        $client = new HttpClient::create();
        $client->withOptions([
            'base_uri' => 'http://api.scraperapi.com?api_key=d746d3ceb1d8046035973a4d78834eed'
        ]);
        $website = $client->request('GET', '/', ['headers' => ['Referer' => 'https://witanime.org/']]);

        dd($website);
        // $title = $website->filter('.anime-details-title')->text();
        // $thumbnail = $website->filter('.anime-thumbnail img')->attr('src');
        // $categories = $website->filter('.anime-genres li > a')->each(function ($node) {
        //     return $node->text();
        // });
        // $description = $website->filter('.anime-story')->text();
        // $info = $website->filter('.anime-info')->each(function ($node) {
        //     return $node->innerText() == "" ? $node->filter('a')->text() : $node->innerText();
        // });
        // try {
        //     $trailer = $website->filter('.anime-external-links .anime-trailer')->attr('href');
        // } catch (\Exception  $e) {
        //     $trailer = null;
        // }

        // try {
        //     $mal_site = $website->filter('.anime-external-links .anime-mal')->attr('href');
        // } catch (\Exception $e) {
        //     $mal_site = null;
        // }

        // $episodes = $website->filter('.episodes-list-content .DivEpisodeContainer')->each(function ($node) {
        //     $title = $node->filter('.episodes-card-title h3 a')->text();
        //     $thumbnail = $node->filter('.episodes-card-container  img.img-responsive')->attr('src');
        //     $episodePage = Goutte::click($node->selectLink($node->filter('a.overlay')->text())->link());

        //     // Episode Page
        //     $page = $episodePage->filter('#episode-watch-content')->each(function ($node) {
        //         return $node->filter('#episode-servers li > a')->each(function ($node) {
        //             $servers = [
        //                 'title' => $node->text(),
        //                 'embed_url' => $node->attr('data-ep-url')
        //             ];
        //             return $servers;
        //         });
        //     });

        //     // Episode Download
        //     $download = $episodePage->filter('.episode-download-container')->each(function ($node) {
        //         return $node->filter('.quality-list li:not(li:first-child) > a')->each(function ($node) {
        //             return [
        //                 'title' => $node->text(),
        //                 'url' => $node->attr('href')
        //             ];
        //         });
        //     });


        //     return [
        //         'title' => $title,
        //         'thumbnail' => $thumbnail,
        //         'servers' => $this->getAnimeServers($page[0]) == null ? $page[0] : array_merge($page[0], $this->getAnimeServers($page[0])),
        //         'download' => $download[0]
        //     ];
        // });


        // $animeData = [
        //     'title' =>  $title,
        //     'thumbnail' => $thumbnail,
        //     'categories' => $categories,
        //     'description' => $description,
        //     'teaser' => $trailer,
        //     'mal_site' => $mal_site,
        //     'type' => $info[0],
        //     'start_from' => $info[1],
        //     'status' => $info[2],
        //     'source' => $info[6],
        //     'episodes' => $episodes
        // ];

        // dd($animeData);


        // /** Create Anime Profile **/
        // // Upload Thumbnail
        // $thumbnailUrl = explode('/', parse_url($animeData['thumbnail'], PHP_URL_PATH));
        // $thumbnailName = array_pop($thumbnailUrl);
        // $thumbnailNewName = md5(rand(0, 999999999)) . '.' . pathinfo($thumbnailName, PATHINFO_EXTENSION);
        // Storage::disk('local')->put("thumbnails/{$thumbnailNewName}", file_get_contents($animeData['thumbnail']));

        // // Create Profile
        // $animeProfile = Anime::create([
        //     'title' => $animeData['title'],
        //     'thumbnail' => $thumbnailNewName,
        //     'description' => $animeData['description'],
        //     'type' => Type::where('title', '=', "{$animeData['type']}")->first()->id,
        //     'status' => Status::where('title', '=', "{$animeData['status']}")->first()->id,
        //     'source' => $animeData['source'],
        //     'start_from' => $animeData['start_from'],
        //     'teaser' => $animeData['teaser'],
        //     'mal_site' => $animeData['mal_site']
        // ]);

        // // Add Anime Categories
        // foreach ($animeData['categories'] as $category) {
        //     $selectedCategory = Category::where('title', '=', trim($category))->first()->id;
        //     SelectedCategory::create([
        //         'anime_id' => $animeProfile->id,
        //         'category_id' => $selectedCategory
        //     ]);
        // }

        // // Add Anime Episodes
        // foreach ($animeData['episodes'] as $episode) {
        //     // Upload Episode Thumbnail
        //     $episodeThumbnailUrl = explode('/', parse_url($episode['thumbnail'], PHP_URL_PATH));
        //     $episodeThumbnailName = array_pop($episodeThumbnailUrl);
        //     $episodeThumbnailNewName = md5(rand(0, 999999999)) . '.' . pathinfo($episodeThumbnailName, PATHINFO_EXTENSION);
        //     Storage::disk('local')->put("episodes/thumbnails/{$episodeThumbnailNewName}", file_get_contents($episode['thumbnail']));

        //     // Add Episode
        //     Episode::create([
        //         'anime_id' => $animeProfile->id,
        //         'title' => $episode['title'],
        //         'servers' => json_encode($episode['servers']),
        //         'download' => json_encode($episode['download']),
        //         'thumbnail' => $episodeThumbnailNewName,
        //     ]);
        // }

        // return $this->successResponse($animeData, 'Anime Scraped Successfully');
    }
}
