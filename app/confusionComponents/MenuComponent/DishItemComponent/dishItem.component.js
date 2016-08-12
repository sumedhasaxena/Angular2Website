System.register(['@angular/core', '@angular/router-deprecated', './../../FavoriteComponent/Service/favorite.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, favorite_service_1;
    var DishItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (favorite_service_1_1) {
                favorite_service_1 = favorite_service_1_1;
            }],
        execute: function() {
            let DishItemComponent = class DishItemComponent {
                constructor(favoriteService) {
                    this.favoriteService = favoriteService;
                    this.addToFavorites = function (dishId) {
                        console.log('Add to favorites', dishId);
                        this.favoriteService.saveFavoriteDish({ _id: dishId });
                        this.showFavorites = !this.showFavorites;
                    };
                    console.log("reached dishItem constructor");
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "id", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "name", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "image", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "category", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "label", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "price", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "description", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "showDetails", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DishItemComponent.prototype, "showFavorites", void 0);
            DishItemComponent = __decorate([
                core_1.Component({
                    selector: 'dishItem',
                    templateUrl: '/app/confusionComponents/MenuComponent/DishItemComponent/dishItemTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                    providers: [favorite_service_1.FavoriteService]
                }), 
                __metadata('design:paramtypes', [favorite_service_1.FavoriteService])
            ], DishItemComponent);
            exports_1("DishItemComponent", DishItemComponent);
        }
    }
});
//# sourceMappingURL=dishItem.component.js.map