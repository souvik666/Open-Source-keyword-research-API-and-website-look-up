**GET /alexarank**

By passing the domain name as uri parameters you can extract the rank of the website the ranking keywords of that website and it's competition

**Request Parameters**

    {

    "uri":"www.google.com"

    }

**Response(json)**

    {

    "status": 200,

    "message": "Data successfully retrieved",

    "data": {

    "site_rank": "1",

    "top_keywords": [

    "gmail",

    "google translate",

    "google maps",

    "translate",

    "google analytics"

    ],

    "similar_sites": [

    "youtube.com",

    "facebook.com",

    "wikipedia.org",

    "microsoft.com",

    "instagram.com"

    ]

    }

    }

**GET /amazon**

You can provide Parameters like phrase and count of result that wish to have depending upon the count the response time may vary, because of real time scrapping of the real website,

**Request Parameters**

    {

    "phrase":"Macbook",

    "count":20

    }

**Response(json)**

    [

    {

    "keyword": "macbook",

    "totalProducts": "323"

    },

all other results links with their qunty...

    ]

**Check Broken Links**
By passing your website URL you can check for Broken Links that are present in your website

**Request Parameters**

    {

        "uri":"https://www.google.com/",

    }

**Response(json)**

    {

        "CheckedLinks": [

    {

       "url": "https://google.com/",

       "state": "OK",

        "status": 200

     },

      {

          "url": "data:image/png;base...",

        "state": "SKIPPED",

       "status": 0
             
          },
 
           {

        "url": "data:image/png;base64...",

                "state": "SKIPPED",

        "status": 0

        },

                {

        "url": "urls that are cheeked",

          "state": "OK",

         "status": 200

         },

         **_all other cheeked links with their states_**

      ],

         "BrokenkLinks": [],

           "BrokenLinkCount": "Congratulations no broken links found"

              }

**The API is under development and it's only for educational purpose**
