<?php

return [

    /*
     |-----------------------------------------------------------------------
     | Symfony Http Client Configuration
     |-----------------------------------------------------------------------
     |
     | A collection of default request options to apply to each request
     | dispatched by the Symfony Http Client.
     |
     | @see {@link https://symfony.com/doc/current/http_client.html}
     */

    'client' => [
        'max_redirects' => 0,
        'proxy' => 'http://scraperapi:d746d3ceb1d8046035973a4d78834eed@proxy-server.scraperapi.com:8001',
        // 'verify' => false,
    ],
];
