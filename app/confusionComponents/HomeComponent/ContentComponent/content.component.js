System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/observable/forkJoin', './FeaturedComponent/featuredItem.component', './Service/content.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, featuredItem_component_1, content_service_1;
    var ContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (featuredItem_component_1_1) {
                featuredItem_component_1 = featuredItem_component_1_1;
            },
            function (content_service_1_1) {
                content_service_1 = content_service_1_1;
            }],
        execute: function() {
            let ContentComponent = class ContentComponent {
                constructor(contentService) {
                    this.contentService = contentService;
                    this.allDishes = [];
                    this.allPromotions = [];
                    this.allLeaders = [];
                    this.featuredDish = {};
                    this.featuredPromotion = {};
                    this.featuredLeader = {};
                    this.message = "Loading...";
                    this.showFeaturedItem = false;
                    this.featuredDish = contentService.getDishes();
                    this.featuredPromotion = contentService.getPromotions();
                    this.featuredLeader = contentService.getLeaders();
                    console.log("Getting featured items");
                }
                ngOnInit() {
                    Observable_1.Observable.forkJoin(this.contentService.getDishes(), this.contentService.getLeaders(), this.contentService.getPromotions())
                        .subscribe(res => {
                        this.allDishes = res[0],
                            this.allLeaders = res[1],
                            this.allPromotions = res[2];
                    }, null, () => {
                        this.featuredDish = this.allDishes.find(dish => dish.featured == true);
                        this.featuredLeader = this.allLeaders.find(leader => leader.featured == true);
                        this.featuredPromotion = this.allPromotions.find(promotion => promotion.featured == true);
                        this.message = "";
                        this.showFeaturedItem = true;
                        console.log("call for fetured items completed");
                    });
                }
            };
            ContentComponent = __decorate([
                core_1.Component({
                    selector: 'content',
                    templateUrl: '/app/confusionComponents/HomeComponent/ContentComponent/contentTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    directives: [featuredItem_component_1.FeaturedItemComponent],
                    providers: [content_service_1.ContentService, http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [content_service_1.ContentService])
            ], ContentComponent);
            exports_1("ContentComponent", ContentComponent);
        }
    }
});
//# sourceMappingURL=content.component.js.map