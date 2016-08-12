System.register(['@angular/core', '@angular/router-deprecated', './Service/favorite.service', './../FilterPipeComponent/filterPipe.pipe'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, favorite_service_1, filterPipe_pipe_1;
    var FavoriteComponent;
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
            },
            function (filterPipe_pipe_1_1) {
                filterPipe_pipe_1 = filterPipe_pipe_1_1;
            }],
        execute: function() {
            let FavoriteComponent = class FavoriteComponent {
                constructor(favoriteService) {
                    this.favoriteService = favoriteService;
                    this.tab = 1;
                    this.filtText = '';
                    this.showDetails = false;
                    this.showDelete = false;
                    this.showMenu = true;
                    this.message = "";
                    this.dishes = [];
                    this.toggleDetails = function () {
                        this.showDetails = !this.showDetails;
                    };
                    this.toggleDelete = function () {
                        this.showDelete = !this.showDelete;
                    };
                    this.select = function (setTab) {
                        this.tab = setTab;
                        if (setTab === 2) {
                            this.filtText = "appetizer";
                        }
                        else if (setTab === 3) {
                            this.filtText = "mains";
                        }
                        else if (setTab === 4) {
                            this.filtText = "dessert";
                        }
                        else {
                            this.filtText = "";
                        }
                    };
                    this.isSelected = function (checkTab) {
                        return (this.tab === checkTab);
                    };
                    this.deleteFavorite = function (dishid) {
                        console.log('Delete favorites', dishid);
                        this.favoriteService.deleteFavoriteDish({ id: dishid });
                        this.showDelete = !this.showDelete;
                    };
                    this.dishes = favoriteService.getFavoriteDishes(0);
                    console.log("dishes object");
                }
            };
            FavoriteComponent = __decorate([
                core_1.Component({
                    selector: 'favorites',
                    templateUrl: '/app/confusionComponents/FavoriteComponent/favoriteTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                    providers: [favorite_service_1.FavoriteService],
                    pipes: [filterPipe_pipe_1.FilterPipe]
                }), 
                __metadata('design:paramtypes', [favorite_service_1.FavoriteService])
            ], FavoriteComponent);
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map