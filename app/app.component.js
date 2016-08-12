System.register(['@angular/core', '@angular/router-deprecated', './confusionComponents/HeaderComponent/header.component', './confusionComponents/FooterComponent/footer.component', './confusionComponents/HomeComponent/home.component', './confusionComponents/AboutComponent/about.component', './confusionComponents/ContactComponent/contact.component', './confusionComponents/MenuComponent/menu.component', './confusionComponents/DishDetailComponent/dishDetail.component', './confusionComponents/FavoriteComponent/favorite.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, header_component_1, footer_component_1, home_component_1, about_component_1, contact_component_1, menu_component_1, dishDetail_component_1, favorite_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (dishDetail_component_1_1) {
                dishDetail_component_1 = dishDetail_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
            };
            AppComponent = __decorate([
                router_deprecated_1.RouteConfig([
                    { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                    { path: '/home', name: 'Home', component: home_component_1.HomeComponent },
                    { path: '/aboutus', name: 'About', component: about_component_1.AboutComponent },
                    { path: '/contactus', name: 'Contact', component: contact_component_1.ContactComponent },
                    { path: '/menu', name: 'Menu', component: menu_component_1.MenuComponent },
                    { path: '/menu/:id', name: 'DishDetails', component: dishDetail_component_1.DishDetailComponent },
                    { path: '/favorites', name: 'Favorites', component: favorite_component_1.FavoriteComponent },
                    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                ]),
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: '/app/confusionMainPage.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    directives: [header_component_1.HeaderComponent,
                        footer_component_1.FooterComponent,
                        router_deprecated_1.ROUTER_DIRECTIVES
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map