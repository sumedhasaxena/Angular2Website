System.register(['@angular/core', '@angular/http', './RegisterComponent/register.component', './Service/auth.service'], function(exports_1, context_1) {
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
    var core_1, http_1, register_component_1, auth_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(authService) {
                    this.authService = authService;
                    this.loginCompleted = new core_1.EventEmitter();
                    this.loggedIn = false;
                    this.showLogin = false;
                    this.loginFailed = false;
                    this.loginError = "";
                    this.loginData = {
                        username: '',
                        password: ''
                    };
                    this.Login = function () {
                        console.log("loggedin");
                        this.authService.login(this.loginData)
                            .subscribe(res => {
                            if (res.success) {
                                window.localStorage.setItem('auth_key', res.token);
                                this.loggedIn = true;
                                this.hideDialog();
                            }
                        }, error => {
                            this.loggedIn = false;
                            this.loginFailed = true;
                            this.loginError = (error.json() != null && error.json().err != null) ? error.json().err.message : "Login Failed";
                            console.log("Login failed " + this.loginError);
                        }, () => {
                            this.loginCompleted.emit({ newValue: this.loggedIn,
                                userName: this.loginData.username,
                                error: this.error });
                            this.clearLoginData();
                            console.log("Call for login completed");
                        });
                    };
                    this.openRegister = function () {
                        this.clearLoginData();
                        this.hideDialog();
                        this.registerComponent.showDialog();
                    };
                    this.clearLoginData = function () {
                        this.loginData.username = "";
                        this.loginData.password = "";
                    };
                }
                showDialog() {
                    this.showLogin = true;
                }
                hideDialog() {
                    this.showLogin = false;
                }
            };
            __decorate([
                core_1.ViewChild(register_component_1.RegisterComponent), 
                __metadata('design:type', register_component_1.RegisterComponent)
            ], LoginComponent.prototype, "registerComponent", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], LoginComponent.prototype, "loginCompleted", void 0);
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'login',
                    templateUrl: '/app/confusionComponents/HeaderComponent/LoginComponent/loginTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    directives: [register_component_1.RegisterComponent],
                    providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [auth_service_1.AuthService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map