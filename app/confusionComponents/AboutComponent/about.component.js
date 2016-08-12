System.register(['@angular/core', '@angular/http', './Service/about.service'], function(exports_1, context_1) {
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
    var core_1, http_1, about_service_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (about_service_1_1) {
                about_service_1 = about_service_1_1;
            }],
        execute: function() {
            let AboutComponent = class AboutComponent {
                constructor(aboutService) {
                    this.aboutService = aboutService;
                    this.message = "Loading...";
                    console.log("Getting leaders");
                }
                ngOnInit() {
                    this.aboutService.getLeaders()
                        .subscribe(res => {
                        this.leaders = res;
                    }, null, () => {
                        this.message = "";
                        console.log("Call for leaders completed");
                    });
                }
            };
            AboutComponent = __decorate([
                core_1.Component({
                    selector: 'about',
                    templateUrl: '/app/confusionComponents/AboutComponent/aboutTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    providers: [about_service_1.AboutService, http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [about_service_1.AboutService])
            ], AboutComponent);
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map