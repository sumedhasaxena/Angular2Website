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
    var DishDetailService;
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
            let DishDetailService = class DishDetailService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = AppSettings_settings_1.AppSettings.API_ENDPOINT;
                }
                getDish(dishId) {
                    return this.http.get(this.baseUrl + "dishes/" + dishId)
                        .map(res => res.json());
                    //    if(dishId == 0){
                    //        this.dish = {
                    //             "id": 0,
                    //         "name": "Uthapizza",
                    //         "image": "images/uthapizza.png",
                    //         "category": "mains",
                    //         "label": "Hot",
                    //         "price": "4.99",
                    //         "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
                    //         "comments": [
                    //             {
                    //             "rating": 5,
                    //             "comment": "Imagine all the eatables, living in conFusion!",
                    //             "author": "John Lemon",
                    //             "date": "2012-10-16T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 4,
                    //             "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                    //             "author": "Paul McVites",
                    //             "date": "2014-09-05T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 3,
                    //             "comment": "Eat it, just eat it!",
                    //             "author": "Michael Jaikishan",
                    //             "date": "2015-02-13T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 4,
                    //             "comment": "Ultimate, Reaching for the stars!",
                    //             "author": "Ringo Starry",
                    //             "date": "2013-12-02T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 2,
                    //             "comment": "It's your birthday, we're gonna party!",
                    //             "author": "25 Cent",
                    //             "date": "2011-12-02T17:57:28.556094Z"
                    //             }
                    //         ]
                    //        };        
                    //    }else if (dishId ==1){
                    //        this.dish = {
                    //            "id": 1,
                    //         "name": "Zucchipakoda",
                    //         "image": "images/zucchipakoda.png",
                    //         "category": "appetizer",
                    //         "label": "",
                    //         "price": "1.99",
                    //         "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
                    //         "comments": [
                    //             {
                    //             "rating": 5,
                    //             "comment": "Imagine all the eatables, living in conFusion!",
                    //             "author": "John Lemon",
                    //             "date": "2012-10-16T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 4,
                    //             "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                    //             "author": "Paul McVites",
                    //             "date": "2014-09-05T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 3,
                    //             "comment": "Eat it, just eat it!",
                    //             "author": "Michael Jaikishan",
                    //             "date": "2015-02-13T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 4,
                    //             "comment": "Ultimate, Reaching for the stars!",
                    //             "author": "Ringo Starry",
                    //             "date": "2013-12-02T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 2,
                    //             "comment": "It's your birthday, we're gonna party!",
                    //             "author": "25 Cent",
                    //             "date": "2011-12-02T17:57:28.556094Z"
                    //             }
                    //         ]
                    //        };        
                    //    }else if(dishId == 2){
                    //        this.dish = {
                    //            "id": 2,
                    //         "name": "Vadonut",
                    //         "image": "images/vadonut.png",
                    //         "category": "appetizer",
                    //         "label": "New",
                    //         "price": 1.99,
                    //         "description": "A quintessential ConFusion experience, is it a vada or is it a donut?",
                    //         "comments": [
                    //             {
                    //             "rating": 5,
                    //             "comment": "Imagine all the eatables, living in conFusion!",
                    //             "author": "John Lemon",
                    //             "date": "2012-10-16T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 4,
                    //             "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                    //             "author": "Paul McVites",
                    //             "date": "2014-09-05T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 3,
                    //             "comment": "Eat it, just eat it!",
                    //             "author": "Michael Jaikishan",
                    //             "date": "2015-02-13T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 4,
                    //             "comment": "Ultimate, Reaching for the stars!",
                    //             "author": "Ringo Starry",
                    //             "date": "2013-12-02T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 2,
                    //             "comment": "It's your birthday, we're gonna party!",
                    //             "author": "25 Cent",
                    //             "date": "2011-12-02T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 5,
                    //             "comment": "",
                    //             "author": "",
                    //             "date": "2016-05-15T20:26:54.265Z"
                    //             },
                    //             {
                    //             "rating": 5,
                    //             "comment": "",
                    //             "author": "",
                    //             "date": "2016-05-15T20:26:54.265Z"
                    //             },
                    //             {
                    //             "rating": 5,
                    //             "comment": "",
                    //             "author": "",
                    //             "date": "2016-05-15T20:27:06.320Z"
                    //             },
                    //             {
                    //             "rating": 5,
                    //             "comment": "",
                    //             "author": "",
                    //             "date": "2016-05-15T20:27:59.368Z"
                    //             }
                    //         ]
                    //        };        
                    //    }else if (dishId == 3){
                    //        this.dish = {
                    //              "id": 3,
                    //         "name": "ElaiCheese Cake",
                    //         "image": "images/elaicheesecake.png",
                    //         "category": "dessert",
                    //         "label": "",
                    //         "price": "2.99",
                    //         "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
                    //         "comments": [
                    //             {
                    //             "rating": 5,
                    //             "comment": "Imagine all the eatables, living in conFusion!",
                    //             "author": "John Lemon",
                    //             "date": "2012-10-16T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 4,
                    //             "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                    //             "author": "Paul McVites",
                    //             "date": "2014-09-05T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 3,
                    //             "comment": "Eat it, just eat it!",
                    //             "author": "Michael Jaikishan",
                    //             "date": "2015-02-13T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 4,
                    //             "comment": "Ultimate, Reaching for the stars!",
                    //             "author": "Ringo Starry",
                    //             "date": "2013-12-02T17:57:28.556094Z"
                    //             },
                    //             {
                    //             "rating": 2,
                    //             "comment": "It's your birthday, we're gonna party!",
                    //             "author": "25 Cent",
                    //             "date": "2011-12-02T17:57:28.556094Z"
                    //             }
                    //         ]
                    //        };        
                    //    }
                    //    return this.dish;
                }
            };
            DishDetailService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], DishDetailService);
            exports_1("DishDetailService", DishDetailService);
        }
    }
});
//# sourceMappingURL=dishDetail.service.js.map