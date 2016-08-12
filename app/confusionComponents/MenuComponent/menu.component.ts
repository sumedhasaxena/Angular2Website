import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {MenuService} from "./Service/menu.service"
import {DishItemComponent} from './DishItemComponent/dishItem.component'
import {FilterPipe} from './../FilterPipeComponent/filterPipe.pipe'

@Component({
    selector: 'menu',
    templateUrl: '/app/confusionComponents/MenuComponent/menuTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    providers: [MenuService, HTTP_PROVIDERS],
    directives: [DishItemComponent],
    pipes: [FilterPipe]
    
})
export class MenuComponent implements OnInit{

    dishes: any[];
    showMenu = false;
    message = "Loading ...";
    
    showDetails = false;
    showFavorites = false;
    filtText = '';
    tab = 1;

    constructor(private menuService: MenuService){     
        console.log("Getting dishes")
    }

    ngOnInit(){

    this.menuService.getDishes()
        .subscribe(res => {
            this.dishes = res;
            console.log(this.dishes);
        },
        null,
        () => {
            this.message = "";
            this.showMenu = true;
            console.log("Call for dishes completed");
        })
    } 

    toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };

    toggleFavorites = function () {
        this.showFavorites = !this.showFavorites;
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


}