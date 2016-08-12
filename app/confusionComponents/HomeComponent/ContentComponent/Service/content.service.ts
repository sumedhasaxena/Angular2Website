import {Http} from '@angular/http'
import {Observable} from 'rxjs/rx'
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core'

import {AppSettings} from './../../../AppSettings.settings'


@Injectable() //makes service ready for injection in other classes
export class ContentService{
    
    private baseUrl = AppSettings.API_ENDPOINT;
   
    constructor(private http: Http){
       
    }
    
    getDishes(){
        return this.http.get(this.baseUrl + "dishes")
            .map(res=>res.json());
    }

    getPromotions(){
        return this.http.get(this.baseUrl + "promotions")
            .map(res=>res.json());
    }

    getLeaders(){
        return this.http.get(this.baseUrl + "leadership")
            .map(res=>res.json());
    }

//    getFeaturedDish(){
//         var featuredDish = {
//         title: "Our Lipsmacking Culinary Creations",
//         showFeaturedItem: true,
//         message: "",
//         image: "app/images/uthapizza.png",
//         name: "Uthapizza",
//         label: "Hot",
//         price: 4.99,
//         description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
//         isFoodItem: true,
//         isLeftOriented: true
//     };

//         return featuredDish;
//     } 

//    getFeaturedPromotion(){
//         var featuredPromotion = {
//         title: "This Month's Promotions",
//         showFeaturedItem: true,
//         message: "",
//         image: "app/images/buffet.png",
//         name: "Weekend Grand Buffet",
//         label: "New",
//         price: 19.99,
//         description: "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person.",
//         isFoodItem: true,
//         isLeftOriented: false
//         }

//         return featuredPromotion;
//     }

//     getFeaturedLeader(){
//         var featuredLeader = {
//         title: "Meet our Culinary Specialists",
//         showFeaturedItem: true,
//         message: "",
//         image: "app/images/alberto.png",
//         name: "Peter Pan",
//         designation: "Chief Epicurious Officer",
//         description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.",
//         isFoodItem: false,
//         isLeftOriented: true
//     }

//     return featuredLeader;
//     }
 
 
}