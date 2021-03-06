System.register(['@angular/core', '@angular/http', './../Service/auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, auth_service_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let RegisterComponent = class RegisterComponent {
                //rememberMe;
                constructor(authService) {
                    this.authService = authService;
                    this.message = "";
                    this.registrationFailed = false;
                    this.requestSubmitted = false;
                    this.showRegister = false;
                    this.registrationData = {
                        username: '',
                        password: '',
                        firstname: '',
                        lastname: ''
                    };
                    this.Register = function () {
                        console.log("Registering the user");
                        this.authService.register(this.registrationData)
                            .subscribe(res => {
                            this.message = res.status;
                            this.requestSubmitted = true;
                            this.registrationFailed = false;
                        }, error => {
                            this.registrationFailed = true;
                            this.message = (error.json() != null && error.json().err != null) ? error.json().err.message : "Login Failed";
                            console.log("Registration failed " + this.message);
                            this.requestSubmitted = true;
                        }, () => {
                            console.log("Call for registration completed");
                        });
                    };
                }
                showDialog() {
                    this.showRegister = true;
                }
                hideDialog() {
                    this.showRegister = false;
                }
            };
            RegisterComponent = __decorate([
                core_1.Component({
                    selector: 'register',
                    templateUrl: '/app/confusionComponents/HeaderComponent/LoginComponent/RegisterComponent/registerTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [auth_service_1.AuthService])
            ], RegisterComponent);
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map