import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import {RouteParams} from '@angular/router-deprecated';

import {FavoriteService} from './Service/favorite.service'
import {FilterPipe} from './../FilterPipeComponent/filterPipe.pipe'

@Component({
    selector: 'favorites',
    templateUrl: '/app/confusionComponents/FavoriteComponent/favoriteTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [FavoriteService],
    pipes: [FilterPipe]
    
})
export class FavoriteComponent{

    tab = 1;
    filtText = '';
    showDetails = false;
    showDelete = false;       
    showMenu = true;
    message = "";
    dishes = [];

    constructor(private favoriteService: FavoriteService){
     this.dishes = favoriteService.getFavoriteDishes(0);
     console.log("dishes object")
    }

      toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };

    toggleDelete = function () {
        this.showDelete = !this.showDelete;
    };


    select = function (setTab) {
        this.tab = setTab;

        if (setTab === 2) {
            this.filtText = "appetizer";
        } else if (setTab === 3) {
            this.filtText = "mains";
        } else if (setTab === 4) {
            this.filtText = "dessert";
        } else {
           this.filtText = "";
        }
    };

    isSelected = function (checkTab) {
        return (this.tab === checkTab);
    };

    deleteFavorite = function(dishid) {
        console.log('Delete favorites', dishid);
        this.favoriteService.deleteFavoriteDish({id: dishid});
        this.showDelete = !this.showDelete;        
    };
}