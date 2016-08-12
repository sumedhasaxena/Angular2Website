import {Component,Input} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import {FavoriteService} from './../../FavoriteComponent/Service/favorite.service'


@Component({
    selector: 'dishItem',
    templateUrl: '/app/confusionComponents/MenuComponent/DishItemComponent/dishItemTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [FavoriteService]   
    
})
export class DishItemComponent{
    @Input() id; 
    @Input() name;
    @Input() image;
    @Input() category; 
    @Input() label;
    @Input() price;
    @Input() description; 
    @Input() showDetails; 
    @Input() showFavorites; 

    constructor(private favoriteService: FavoriteService){
        console.log("reached dishItem constructor");     
       }   

    addToFavorites = function(dishId) {
        console.log('Add to favorites', dishId);
        this.favoriteService.saveFavoriteDish({_id: dishId});        
        this.showFavorites = !this.showFavorites;
    };     
}