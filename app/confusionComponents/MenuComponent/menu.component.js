System.register(['@angular/core', '@angular/http', "./Service/menu.service", './DishItemComponent/dishItem.component', './../FilterPipeComponent/filterPipe.pipe'], function(exports_1, context_1) {
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
    var core_1, http_1, menu_service_1, dishItem_component_1, filterPipe_pipe_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (dishItem_component_1_1) {
                dishItem_component_1 = dishItem_component_1_1;
            },
            function (filterPipe_pipe_1_1) {
                filterPipe_pipe_1 = filterPipe_pipe_1_1;
            }],
        execute: function() {
            let MenuComponent = class MenuComponent {
                constructor(menuService) {
                    this.menuService = menuService;
                    this.showMenu = false;
                    this.message = "Loading ...";
                    this.showDetails = false;
                    this.showFavorites = false;
                    this.filtText = '';
                    this.tab = 1;
                    this.toggleDetails = function () {
                        this.showDetails = !this.showDetails;
                    };
                    this.toggleFavorites = function () {
                        this.showFavorites = !this.showFavorites;
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
                    console.log("Getting dishes");
                }
                ngOnInit() {
                    this.menuService.getDishes()
                        .subscribe(res => {
                        this.dishes = res;
                        console.log(this.dishes);
                    }, null, () => {
                        this.message = "";
                        this.showMenu = true;
                        console.log("Call for dishes completed");
                    });
                }
            };
            MenuComponent = __decorate([
                core_1.Component({
                    selector: 'menu',
                    templateUrl: '/app/confusionComponents/MenuComponent/menuTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    providers: [menu_service_1.MenuService, http_1.HTTP_PROVIDERS],
                    directives: [dishItem_component_1.DishItemComponent],
                    pipes: [filterPipe_pipe_1.FilterPipe]
                }), 
                __metadata('design:paramtypes', [menu_service_1.MenuService])
            ], MenuComponent);
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map