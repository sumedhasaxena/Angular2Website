import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin'

import {FeaturedItemComponent} from './FeaturedComponent/featuredItem.component'
import {ContentService} from './Service/content.service'

@Component({
    selector: 'content',
    templateUrl: '/app/confusionComponents/HomeComponent/ContentComponent/contentTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    directives: [FeaturedItemComponent],
    providers: [ContentService, HTTP_PROVIDERS]
})
export class ContentComponent implements OnInit{

allDishes = [];
allPromotions = [];
allLeaders = [];

featuredDish = {};
featuredPromotion ={};
featuredLeader ={};

message = "Loading...";
showFeaturedItem = false;



 constructor(private contentService: ContentService){
     
     this.featuredDish = contentService.getDishes();
     this.featuredPromotion = contentService.getPromotions();
     this.featuredLeader = contentService.getLeaders();

     console.log("Getting featured items");
 }    

 ngOnInit(){ 

     Observable.forkJoin(
         this.contentService.getDishes(), 
         this.contentService.getLeaders(),
         this.contentService.getPromotions()
     )
     .subscribe(
         res => {
             this.allDishes = res[0],
             this.allLeaders = res[1],
             this.allPromotions = res[2]
         },
         null,
         () => {
              this.featuredDish = this.allDishes.find(dish=> dish.featured == true);
              this.featuredLeader = this.allLeaders.find(leader=> leader.featured == true);
              this.featuredPromotion = this.allPromotions.find(promotion => promotion.featured == true);
              this.message = "";
              this.showFeaturedItem  = true;
              console.log("call for fetured items completed");

            }
     )
 }

  
}