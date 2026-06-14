var APP_DATA = {
  "scenes": [
    {
      "id": "0-aerial-view",
      "name": "Aerial View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.001617799355740246,
        "pitch": 0.027610475453398564,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.20009049055745365,
          "pitch": 0.24575803852449774,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9415557094141107,
          "pitch": -0.05890319935733146,
          "title": "Towards Bengaluru city",
          "text": "Text"
        },
        {
          "yaw": 1.1226935364660413,
          "pitch": -0.04699007237431019,
          "title": "Towards Mysuru city",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -0.051428938961295856,
        "pitch": 0.08939170091594839,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.007094174643832218,
          "pitch": 0.15225058279144577,
          "rotation": 0,
          "target": "2-main-door"
        },
        {
          "yaw": 3.120574104161177,
          "pitch": -0.24553521798031497,
          "rotation": 0,
          "target": "0-aerial-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-door",
      "name": "Main Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 1.6208630312915293,
        "pitch": 0.015252767237367237,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.1150078081425345,
          "pitch": 0.1526751266836257,
          "rotation": 0,
          "target": "3-outdoor-seating-area"
        },
        {
          "yaw": -1.5782580259608068,
          "pitch": 0.09613061781256427,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": 1.6250875627094379,
          "pitch": 0.19496063288432275,
          "rotation": 0,
          "target": "4-billing-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-outdoor-seating-area",
      "name": "Outdoor Seating Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 1.602120531148561,
        "pitch": -0.02046846322480178,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.0030749490695303194,
          "pitch": 0.10625573734349913,
          "rotation": 0,
          "target": "2-main-door"
        },
        {
          "yaw": 1.6841404764483654,
          "pitch": 0.07001071469713338,
          "rotation": 0,
          "target": "7-right-aisle-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-billing-counter",
      "name": "Billing Counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -1.5794102362974218,
        "pitch": -0.06896785707112407,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5268437996198783,
          "pitch": 0.21661925967787887,
          "rotation": 0,
          "target": "2-main-door"
        },
        {
          "yaw": -1.5340382759213362,
          "pitch": 0.07973204411523938,
          "rotation": 0,
          "target": "5-left-aisle-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-left-aisle-",
      "name": "Left Aisle ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -1.5232179863631021,
        "pitch": 0.0408279361620032,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.5542400857267662,
          "pitch": 0.18746031666416485,
          "rotation": 0,
          "target": "6-left--aisle-end"
        },
        {
          "yaw": 1.6001347195461655,
          "pitch": 0.11795962036526042,
          "rotation": 0,
          "target": "4-billing-counter"
        },
        {
          "yaw": 0.010749646117229616,
          "pitch": 0.05020045063789347,
          "rotation": 0,
          "target": "7-right-aisle-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-left--aisle-end",
      "name": "Left  Aisle End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -1.5106902697656484,
        "pitch": 0.09894611581125723,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.6388007688824615,
          "pitch": 0.15395520946084673,
          "rotation": 0,
          "target": "5-left-aisle-"
        },
        {
          "yaw": 0.04921496458125674,
          "pitch": 0.0878229653094138,
          "rotation": 0,
          "target": "6-left--aisle-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-right-aisle-",
      "name": "Right Aisle ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 1.5725097583211225,
        "pitch": 0.07149887087340367,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5723284959407433,
          "pitch": 0.16059666413680596,
          "rotation": 0,
          "target": "8-right-aisle-end"
        },
        {
          "yaw": -0.0011383517373992902,
          "pitch": 0.03062261356667939,
          "rotation": 0,
          "target": "5-left-aisle-"
        },
        {
          "yaw": -1.5039230020145666,
          "pitch": 0.1199235690104068,
          "rotation": 0,
          "target": "3-outdoor-seating-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-right-aisle-end",
      "name": "Right Aisle End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 1.5911145866183132,
        "pitch": 0.07151150375596416,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.5535031893685378,
          "pitch": 0.0741893466126804,
          "rotation": 0,
          "target": "7-right-aisle-"
        },
        {
          "yaw": 0.0053053220528429534,
          "pitch": 0.08861480931828325,
          "rotation": 0,
          "target": "6-left--aisle-end"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Krishna Keshava Restaurant",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
