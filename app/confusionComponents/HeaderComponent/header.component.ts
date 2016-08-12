import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import {HTTP_PROVIDERS} from '@angular/http';

import {LoginComponent} from './LoginComponent/login.component'
import {AuthService} from './LoginComponent/Service/auth.service'

@Component({
    selector: 'header',
    templateUrl: '/app/confusionComponents/HeaderComponent/headerTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    directives: [ ROUTER_DIRECTIVES, LoginComponent ],
    providers: [AuthService, HTTP_PROVIDERS]
    
})
export class HeaderComponent{

@ViewChild(LoginComponent) loginComponent: LoginComponent;
    loggedIn = false;    
    userName = ""; 
    
    constructor(private authService: AuthService){

    }  

    openLogin = function () {
        this.loginComponent.showDialog();
               
    };

    logout = function(){

        this.loggedIn = false;       
        this.username = "";

        this.authService.logout();          
    }

    onLoginCompleted($event){
        this.loggedIn = $event.newValue;
        this.userName = $event.userName;
        if(!this.loggedIn)
        {
            console.log($event.error);
        }
        console.log("login request returned with result: "+ $event.newValue);
    }
}