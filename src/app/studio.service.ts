import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  studio_services = [
    {
      id:1,
      path:'interior-spatial',
      title:['interior-spatial 1','interior-spatial 2','interior-spatial 3','interior-spatial 4','interior-spatial 5'],
      text:'interior and spatial',
      description:['interior wood 1','interior wood 2','interior wood 3','interior wood 4','interior wood 5'],
      image: './assets/images/interiorSpatial1.2.jpg',
      images:[
       './assets/images/InteriorSpatial1.1.jpg',
       './assets/images/interiorSpatial1.2.jpg'
      ],
      longCarousel:[
        './assets/images/Interiordecor2.1.jpg',
        './assets/images/pexels-athena-2180883.jpg',
        './assets/images/pexels-shane-aldendorff-671930.jpg'
      ]
    },
    {
      id:2,
      path:'arthandling-',
      title:['arthandling-1','arthandling-2','arthandling-3','arthandling-4','arthandling-5'],
      text:'art handling and ',
      description:['art handling material 1','art handling material 2','art handling material 3','art handling material 4','art handling material 5'],
      image: './assets/images/pavel-nekoranec-8ALBNshSZTE-unsplash2.jpg',
      images:['./assets/images/art1.jpg',
'./assets/images/art2.jpg'
    ],
      longCarousel:['./assets/images/art3.jpg',
    './assets/images/art4.jpg',
  './assets/images/art5.jpg']
    },
    {
      id:3,      
      path:'costume-setdesign',
      title:['costume-setdesign 1','costume-setdesign 2','costume-setdesign 3','costume-setdesign 4','costume-setdesign 5'],
      text:'costume and set design',
      description:['costume design 1 set','costume design 2 set','costume design 3 set','costume design 4 set','costume design 5 set'],
      image: './assets/images/About.jpg',
      images:['./assets/images/Design1.jpg',
'./assets/images/Design2.jpg'
    ],
      longCarousel:['./assets/images/Design3.jpg',
    './assets/images/Design4.jpg',
  './assets/images/Design5.jpg']
    },
    {
      id:4,
      path:'fashion-items',
      title:['fashion-items 1','fashion-items 2','fashion-items 3','fashion-items 4','fashion-items 5'],
      text:'fashion items',
      description:['fashion items boutique 1','fashion items boutique 2','fashion items boutique 3','fashion items boutique 4','fashion items boutique 5'],
      image: './assets/images/Fashion.jpg',
      images:['./assets/images/Fashion1.jpg',
'./assets/images/Fashion2.jpg'
    ],
      longCarousel:['./assets/images/Fashion3.jpg',
    './assets/images/Fashion4.jpg',
  './assets/images/Fashion5.jpg']
    },
    {
      id:5,
      path:'collaboration',
      title:['collaboration 1','collaboration 2','collaboration 3','collaboration 4','collaboration 5'],
      text:'collaboration',
      description:['collaboration 1 people','collaboration 2 engagements','collaboration 3 functions','collaboration 4 events','collaboration 5 meetups'],
      image: './assets/images/collaboration.jpg',
      images:['./assets/images/collaboration1.jpg',
'./assets/images/collaboration2.jpg'
    ],
      longCarousel:['./assets/images/collaboration3.jpg',
    './assets/images/collaboration4.jpg',
  './assets/images/collaboration5.jpg']
    },
    {
     id:6,
     path:'commissions',
     title:['commissions 1','commissions 2','commissions 3','commissions 4','commissions 5'],
     text:'commissions',
     description:['commissions 1rates ','commissions 2 profits','commissions 3 losses','commissions 4 funds','commissions 5 revenue'],
     image: './assets/images/Commissions.jpg',
     images:['./assets/images/commision1.jpg',
'./assets/images/commision2.jpg'
    ],
     longCarousel:['./assets/images/commision3.jpg',
     './assets/images/commision4.jpg',
     './assets/images/commision5.jpg']
    },
    {
      id:7,
      path:'shops',
      title:['shop 1','shop 2','shop 3','shop 4','shop 5'],
      text:'shops',
      description:['shops 1 goods','shops 2 services','shops 3 retail','shops 4 wholesale','shops 5 flagship'],
      image: './assets/images/Shops.jpg',
      images:['./assets/images/shop1.jpg',
'./assets/images/shop2.jpg'
    ],
      longCarousel:['./assets/images/shop3.jpg',
    './assets/images/shop4.jpg',
  './assets/images/shop5.jpg']
    },
    {
      id:8,
      path:'products',
      title:['products 1','products 2','products 3','products 4','products 5'],
      text:'products',
      description:['products 1 bags','products 2 paintings','products 3 portraits','products 4 tank tops','products 5 sweat'],
      image: './assets/images/Products.jpg',
      images:['./assets/images/products1.jpg',
'./assets/images/products2.jpg'
    ],
      longCarousel:['./assets/images/products3.jpg',
    './assets/images/products4.jpg',
  './assets/images/products5.jpg']
    },
    {
      id:9,
      path:'contact',
      contact:'contact',

      image: './assets/images/contacts.jpg',
    },
    {
      id:10,
      path:'about',
      about:'about',
      image: './assets/images/ian-schneider-TamMbr4okv4-unsplash.jpg',
    }
  ]

  constructor() { } 


}
