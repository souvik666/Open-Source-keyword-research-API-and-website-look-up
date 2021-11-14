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

    {

    "keyword": "macbook pro",

    "totalProducts": "253"

    },

    {

    "keyword": "macbook air",

    "totalProducts": "103"

    },

    {

    "keyword": "macbook pro 13 inch case",

    "totalProducts": "2088"

    },

    {

    "keyword": "macbook air case",

    "totalProducts": "2477"

    }

    ]

**The API is under development and it's only for educational purpose**
