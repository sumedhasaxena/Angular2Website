System.register(['rxjs/add/operator/map', '@angular/core', './../../AppSettings.settings'], function(exports_1, context_1) {
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
    var core_1, AppSettings_settings_1;
    var FavoriteService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AppSettings_settings_1_1) {
                AppSettings_settings_1 = AppSettings_settings_1_1;
            }],
        execute: function() {
            let FavoriteService = class FavoriteService {
                constructor() {
                    this.baseUrl = AppSettings_settings_1.AppSettings.API_ENDPOINT;
                }
                // constructor(private _http: Http){
                // }
                getFavoriteDishes(userId) {
                    var dishes = [{
                            "id": 0,
                            "name": "Uthapizza",
                            "image": "images/uthapizza.png",
                            "category": "mains",
                            "label": "Hot",
                            "price": "4.99",
                            "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
                            "comments": [
                                {
                                    "rating": 5,
                                    "comment": "Imagine all the eatables, living in conFusion!",
                                    "author": "John Lemon",
                                    "date": "2012-10-16T17:57:28.556094Z"
                                },
                                {
                                    "rating": 4,
                                    "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                    "author": "Paul McVites",
                                    "date": "2014-09-05T17:57:28.556094Z"
                                },
                                {
                                    "rating": 3,
                                    "comment": "Eat it, just eat it!",
                                    "author": "Michael Jaikishan",
                                    "date": "2015-02-13T17:57:28.556094Z"
                                },
                                {
                                    "rating": 4,
                                    "comment": "Ultimate, Reaching for the stars!",
                                    "author": "Ringo Starry",
                                    "date": "2013-12-02T17:57:28.556094Z"
                                },
                                {
                                    "rating": 2,
                                    "comment": "It's your birthday, we're gonna party!",
                                    "author": "25 Cent",
                                    "date": "2011-12-02T17:57:28.556094Z"
                                }
                            ]
                        }];
                    return dishes;
                }
                deleteFavoriteDish(id) {
                    //REST call to delete dish from favorites
                    console.log("Deleting favorite dish Id: " + id);
                }
                saveFavoriteDish(id) {
                    //REST API call to add favorite dish
                    console.log("Saving favorite dish Id: " + id);
                }
            };
            FavoriteService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], FavoriteService);
            exports_1("FavoriteService", FavoriteService);
        }
    }
});
//# sourceMappingURL=favorite.service.js.map