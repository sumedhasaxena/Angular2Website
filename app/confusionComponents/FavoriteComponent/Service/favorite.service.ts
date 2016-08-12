import {Http} from '@angular/http'
import {Observable} from 'rxjs/rx'
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core'

import {AppSettings} from './../../AppSettings.settings'

@Injectable() //makes service ready for injection in other classes
export class FavoriteService{
    
     private baseUrl = AppSettings.API_ENDPOINT;
   
    // constructor(private _http: Http){
       
    // }
    
   getFavoriteDishes(userId){
           var dishes = [{
                "id": 0,
            "name": "Uthapizza",
            "image": "images/uthapizza.png",
            "category": "mains",
            "label": "Hot",
            "price": "4.99",
            "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
            "comments": [
                {
                "rating": 5,
                "comment": "Imagine all the eatables, living in conFusion!",
                "author": "John Lemon",
                "date": "2012-10-16T17:57:28.556094Z"
                },
                {
                "rating": 4,
                "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                "author": "Paul McVites",
                "date": "2014-09-05T17:57:28.556094Z"
                },
                {
                "rating": 3,
                "comment": "Eat it, just eat it!",
                "author": "Michael Jaikishan",
                "date": "2015-02-13T17:57:28.556094Z"
                },
                {
                "rating": 4,
                "comment": "Ultimate, Reaching for the stars!",
                "author": "Ringo Starry",
                "date": "2013-12-02T17:57:28.556094Z"
                },
                {
                "rating": 2,
                "comment": "It's your birthday, we're gonna party!",
                "author": "25 Cent",
                "date": "2011-12-02T17:57:28.556094Z"
                }
            ]
           }];

        return dishes;
    } 

    deleteFavoriteDish(id){
        //REST call to delete dish from favorites
        console.log("Deleting favorite dish Id: "+ id);
    }

    saveFavoriteDish(id){
        //REST API call to add favorite dish
        console.log("Saving favorite dish Id: "+ id);
    }
 
 
}