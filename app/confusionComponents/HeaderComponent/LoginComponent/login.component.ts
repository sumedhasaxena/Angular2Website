import {Component, ViewChild, Output, EventEmitter} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {RegisterComponent} from './RegisterComponent/register.component'
import {AuthService} from './Service/auth.service'

@Component({
    selector: 'login',
    templateUrl: '/app/confusionComponents/HeaderComponent/LoginComponent/loginTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    directives: [RegisterComponent],
    providers: [AuthService, HTTP_PROVIDERS]
})
export class LoginComponent{

    @ViewChild(RegisterComponent) registerComponent: RegisterComponent;

    @Output() loginCompleted = new EventEmitter();

    loggedIn = false;

    showLogin = false;
    loginFailed = false;
    loginError = "";

    rememberMe;

    loginData = {
        username: '',
        password: ''
    }

    constructor(private authService: AuthService){
        
    }

    showDialog(){
        this.showLogin = true;
    }

    hideDialog(){
        this.showLogin = false;
    }

    Login = function(){
        
        console.log("loggedin");

        this.authService.login(this.loginData)
                        .subscribe(res => {
                                            if(res.success)
                                            {
                                                window.localStorage.setItem('auth_key', res.token);
                                                this.loggedIn = true;
                                                this.hideDialog();
                                            }
                                          },
                                    error => {
                                        this.loggedIn = false;
                                        this.loginFailed = true;
                                        this.loginError = (error.json() != null && error.json().err != null)? error.json().err.message : "Login Failed";
                                        console.log("Login failed "+ this.loginError);

                                        },
                                    () => {
                                        this.loginCompleted.emit({newValue: this.loggedIn,
                                                                    userName: this.loginData.username,
                                                                    error: this.error});
                                                                    this.clearLoginData();
                                        console.log("Call for login completed");
                                    });
        
    }

    openRegister = function(){
        this.clearLoginData();
        this.hideDialog();
        this.registerComponent.showDialog();
    }

    clearLoginData = function(){
        this.loginData.username = "";
        this.loginData.password = "";
    }
  
}