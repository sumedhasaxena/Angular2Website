import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import {RouteParams} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {DishDetailService} from './Service/dishDetail.service'
import {OrderByPipe} from './../OrderByPipeComponent/orderBy.pipe'
import {CustomDatePipe} from './../DatePipeComponent/datePipe.pipe'

@Component({
    selector: 'dishDetail',
    templateUrl: '/app/confusionComponents/DishDetailComponent/dishDetailTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [DishDetailService, HTTP_PROVIDERS],
    pipes: [OrderByPipe,CustomDatePipe]
    
})
export class DishDetailComponent implements OnInit{

    dishId;
    dish;
    dishComments : any[]
    
    showDish = false;
    message = "Loading;"
    formSubmitted = false;

    orderText ="";

    mycomment = {
        rating : 5,
        comment: ""
    };

    constructor(private _routeParams:RouteParams, private dishDetailService: DishDetailService){

        this.dishId = _routeParams.get("id");
       
    }

    ngOnInit(){

        if(this.dishId!= null)
        {
           this.dishDetailService.getDish(this.dishId)
            .subscribe(res => {
            this.dish = res;
            console.log(this.dish.comments);
            this.dishComments = this.dish.comments;
            
            },
            null,
            () => {
                this.message = "";
                this.showDish = true;
                console.log("Call for dish completed");
                
            })
        } 
    } 


    setRating = function(rating)
    {
        this.mycomment.rating = rating;    
    }

    submitComment = function (form) {        
        
        console.log(this.mycomment.rating);
        console.log(this.mycomment.comment);        
        
         this.mycomment.rating = 5;
         this.mycomment.comment = "";
         this.formSubmitted = true;    
        
    }
}