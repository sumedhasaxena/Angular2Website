System.register(['@angular/core', '@angular/http', './../../../AppSettings.settings'], function(exports_1, context_1) {
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
    var core_1, http_1, AppSettings_settings_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (AppSettings_settings_1_1) {
                AppSettings_settings_1 = AppSettings_settings_1_1;
            }],
        execute: function() {
            let AuthService = class AuthService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = AppSettings_settings_1.AppSettings.API_ENDPOINT;
                }
                login(userCredentials) {
                    // this.isLoggedIn = false;
                    // var headers = new Headers();
                    // var creds = 'username=' + usercreds.userName + '&password=' + usercreds.password;
                    // headers.append('Content-Type', 'application/X-www-form-urlencoded');
                    // return new Promise((resolve) => {
                    //     this.http.post( this.baseUrl+ "users/login", creds, {headers: headers})
                    //     .subscribe((data) => {
                    //                             if(data.json().success)
                    //                              {
                    //                                 window.localStorage.setItem('auth_key', data.json().token);
                    //                                 this.isLoggedIn = true;
                    //                             }
                    //                             resolve(this.isLoggedIn)
                    //                         })
                    //                     })
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this.baseUrl + "users/login", JSON.stringify(userCredentials), { headers: headers })
                        .map(res => res.json());
                }
                logout() {
                    window.localStorage.removeItem('auth_key');
                }
                register(userInfo) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this.baseUrl + "users/register", JSON.stringify(userInfo), { headers: headers })
                        .map(res => res.json());
                }
            };
            AuthService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], AuthService);
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map