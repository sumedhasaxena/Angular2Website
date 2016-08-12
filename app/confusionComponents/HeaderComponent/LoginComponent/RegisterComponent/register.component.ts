import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {AuthService} from './../Service/auth.service';

@Component({
    selector: 'register',
    templateUrl: '/app/confusionComponents/HeaderComponent/LoginComponent/RegisterComponent/registerTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    providers: [AuthService, HTTP_PROVIDERS]

})
export class RegisterComponent{

    message = "";
    registrationFailed = false;
    requestSubmitted = false;

    showRegister = false;
    //rememberMe;

    constructor(private authService: AuthService){
        
    }

    registrationData = {
        username: '',
        password: '',
        firstname: '',
        lastname: ''
    }

    showDialog(){
        this.showRegister = true;
    }

    hideDialog(){
        this.showRegister = false;
    }

    Register = function(){
        
        console.log("Registering the user");
         this.authService.register(this.registrationData)
                        .subscribe(res => {                                                                                           
                                             this.message = res.status; 
                                             this.requestSubmitted = true; 
                                             this.registrationFailed = false;                                             
                                            
                                          },
                                    error => {                                       
                                       this.registrationFailed = true;
                                        this.message = (error.json() != null && error.json().err != null)? error.json().err.message : "Login Failed";
                                        console.log("Registration failed "+ this.message);
                                        this.requestSubmitted = true;
                                        },
                                    () => {
                                       
                                        console.log("Call for registration completed");
                                    });

        

    }
}