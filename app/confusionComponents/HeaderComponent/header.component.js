System.register(['@angular/core', '@angular/router-deprecated', '@angular/http', './LoginComponent/login.component', './LoginComponent/Service/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, http_1, login_component_1, auth_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let HeaderComponent = class HeaderComponent {
                constructor(authService) {
                    this.authService = authService;
                    this.loggedIn = false;
                    this.userName = "";
                    this.openLogin = function () {
                        this.loginComponent.showDialog();
                    };
                    this.logout = function () {
                        this.loggedIn = false;
                        this.username = "";
                        this.authService.logout();
                    };
                }
                onLoginCompleted($event) {
                    this.loggedIn = $event.newValue;
                    this.userName = $event.userName;
                    if (!this.loggedIn) {
                        console.log($event.error);
                    }
                    console.log("login request returned with result: " + $event.newValue);
                }
            };
            __decorate([
                core_1.ViewChild(login_component_1.LoginComponent), 
                __metadata('design:type', login_component_1.LoginComponent)
            ], HeaderComponent.prototype, "loginComponent", void 0);
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'header',
                    templateUrl: '/app/confusionComponents/HeaderComponent/headerTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                    providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [auth_service_1.AuthService])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map