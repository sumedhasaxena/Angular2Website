System.register(['@angular/http', 'rxjs/add/operator/map', '@angular/core', './../../AppSettings.settings'], function(exports_1, context_1) {
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
    var http_1, core_1, AppSettings_settings_1;
    var AboutService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AppSettings_settings_1_1) {
                AppSettings_settings_1 = AppSettings_settings_1_1;
            }],
        execute: function() {
            let AboutService = class AboutService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = AppSettings_settings_1.AppSettings.API_ENDPOINT;
                }
                getLeaders() {
                    return this.http.get(this.baseUrl + "leadership")
                        .map(res => res.json());
                }
            };
            AboutService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], AboutService);
            exports_1("AboutService", AboutService);
        }
    }
});
//# sourceMappingURL=about.service.js.map