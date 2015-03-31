module.exports = {


  friendlyName: 'Get search term',


  description: 'Search for a term on twitter.',


  extendedDescription: '',


  inputs: {

    consumerKey: {
      example: 'xAmBxAmBxAmBkjbyKkjbyKkjbyK',
      description: 'The `consumerKey` associated with one of your Twitter developer apps.',
      required: true,
      whereToGet: {
        url: 'http://dev.twitter.com/apps',
        description: 'Copy and paste an API key, or create one if you haven\'t already.',
        extendedDescription: 'If you don\'t have any Twitter apps created yet, you\'ll need to make one first.'
      }
    },

    consumerSecret: {
      example: 'xAmBxAmBxAmBkjbyKkjbyKkjbyK',
      description: 'The `consumerSecret` associated with one of your Twitter developer apps.',
      required: true,
      whereToGet: {
        url: 'http://dev.twitter.com/apps',
        description: 'Copy and paste an API key, or create one if you haven\'t already.',
        extendedDescription: 'If you don\'t have any Twitter apps created yet, you\'ll need to make one first.'
      }
    },

    searchTerm: {
      example: 'badger',
      description: 'The term you wish to search for.',
      required: true
    },

    accessToken: {
      example: 'QDvCav5zRSafS795TckAerUV53xzgqRyrcfYX2i_PJFObCvACVRP-V7sfemiMPBh3TWypvagfZ6aoqfwKCNcBxg8XR_skdYUe5tsY9UzX9Z_8q4mR',
      description: 'The access token for a given user (granted by Twitter)',
      extendedDescription: 'This "permanent OAuth token" is how Twitter knows the end user has granted access to your app.',
      whereToGet: {
        description: 'Run the `getAccessToken` machine in this pack and use the returned `accessToken`.'
      },
      required: true
    },

    accessSecret: {
      example: 'QDvCav5zRSafS795TckAerUV53xzgqRyrcfYX2i_PJFObCvACVRP-V7sfemiMPBh3TWypvagfZ6aoqfwKCNcBxg8XR_skdYUe5tsY9UzX9Z_8q4mR',
      description: 'The access secret for a given user (granted by Twitter)',
      extendedDescription: 'This "permanent OAuth secret" is how Twitter knows the end user has granted access to your app.',
      whereToGet: {
        description: 'Run the `getAccessToken` machine in this pack and use the returned `accessSecret`.'
      },
      required: true
    }

  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.'
    },

    success: {
      description: 'Returns the posts associate with a twitter search term.',
      {
  "statuses":  [
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Mar 31 22:18:42 +0000 2015",
      "id": 583030686556299300,
      "id_str": "583030686556299265",
      "text": "WHAT IF THE NINTENDO DIRECT SHOWS LOTS OF NEW GAMES THAT I WANT AHHH IM EXCITED",
      "source": "<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 1494206090,
        "id_str": "1494206090",
        "name": "Sam",
        "screen_name": "Minty_Badger",
        "location": "",
        "profile_location": null,
        "description": "becky, she/her, cis, ace",
        "url": "http://t.co/cnWJ38W9CH",
        "entities":  {
          "url":  {
            "urls":  [
               {
                "url": "http://t.co/cnWJ38W9CH",
                "expanded_url": "http://www.samwise-gardner.tumblr.com",
                "display_url": "samwise-gardner.tumblr.com",
                "indices":  [
                  0,
                  22
                ]
              }
            ]
          },
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 185,
        "friends_count": 130,
        "listed_count": 3,
        "created_at": "Sat Jun 08 23:50:51 +0000 2013",
        "favourites_count": 15388,
        "utc_offset": 7200,
        "time_zone": "Amsterdam",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 43955,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/581929357318455298/UVZiKYzq_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/581929357318455298/UVZiKYzq_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1494206090/1427577702",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  []
      },
      "favorited": false,
      "retweeted": false,
      "lang": "en"
    }
  ],
  "search_metadata":  {
    "completed_in": 0.01,
    "max_id": 583030686556299300,
    "max_id_str": "583030686556299265",
    "next_results": "?max_id=583030686556299264&q=badger&count=1&include_entities=1",
    "query": "badger",
    "refresh_url": "?since_id=583030686556299265&q=badger&include_entities=1",
    "count": 1,
    "since_id": 0,
    "since_id_str": "0"
  }
}
    }

  },


  fn: function(inputs, exits) {

    var request = require('request');

    request.get({
      url: 'https://api.twitter.com/1.1/search/tweets.json',
      qs: (function _determineParams (){
        // Search term required
        var _params = {};
        if (inputs.searchTerm) {
          _params.q = inputs.searchTerm;
        }
        return _params;
      })(),
      oauth: {
        consumer_key: inputs.consumerKey,
        consumer_secret: inputs.consumerSecret,
        token: inputs.accessToken,
        token_secret: inputs.accessSecret
      },
      json: true
    }, function(err, response, body) {
      if (err) {
        return exits.error(err);
      }
      if (response.statusCode > 299 || response.statusCode < 200) {
        return exits.error(response.statusCode);
      }

      return exits.success({
        statuses: body.statuses,
        search_metadata: search_metadata
      });
    });
  }


};
