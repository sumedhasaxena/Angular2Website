System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var FeaturedItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let FeaturedItemComponent = class FeaturedItemComponent {
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "title", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "showFeaturedItem", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "message", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "image", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "name", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "label", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "price", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "description", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "designation", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "isFoodItem", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FeaturedItemComponent.prototype, "isLeftOriented", void 0);
            FeaturedItemComponent = __decorate([
                core_1.Component({
                    selector: 'featuredItem',
                    template: `
    <div class="row row-content">
            <div class="col-xs-12 col-sm-3 col-sm-push-9">
                <p style="padding:20px;"></p>
                <h3 align=center>{{title}}</h3>
            </div>
            <div class="col-xs-12 col-sm-9 col-sm-pull-3">
                <div *ngIf="!showFeaturedItem">
                    <h3>{{message}}</h3>
                </div>
                <div *ngIf="isLeftOriented">
                  <div class="media" *ngIf="showFeaturedItem">
                    <div class="media-left media-middle">
                        <a href="#">
                        <img class="media-object img-thumbnail" 
                        src={{image}}>
                        </a>
                    </div>
                    <div class="media-body">
                        
                        <div *ngIf = "isFoodItem">
                            <h2 class="media-heading">{{name}} 
                            <span class="label label-danger">{{label}}</span> 
                            <span class="badge">{{price/100 | currency}}</span>
                            </h2>
                        </div>
                       
                        <div *ngIf = "!isFoodItem">
                            <h3 class="media-heading">{{name}}
                            <small>{{designation}}</small></h3>
                        </div>
                        <p>{{description}}</p>
                    </div>
                  </div>
                </div> 
                <div *ngIf="!isLeftOriented">
                    <div class="media" *ngIf="showFeaturedItem">
                        <div class="media-body">                           
                            <div *ngIf = "isFoodItem"> 
                                <h2 class="media-heading">{{name}}
                                <span class="label label-danger label-xs">{{label}}</span>
                                <span class="badge">{{price/100 | currency}}</span></h2>
                            </div>

                            <div *ngIf = "!isFoodItem">
                                <h3 class="media-heading">{{name}}
                                <small>{{designation}}</small></h3>
                            </div>                            
                            <p>{{description}}</p>
                        </div>
                        <div class="media-right media-middle">
                            <a href="#">
                            <img class="media-object img-thumbnail" 
                            src="{{image}}">
                            </a>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    `,
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css']
                }), 
                __metadata('design:paramtypes', [])
            ], FeaturedItemComponent);
            exports_1("FeaturedItemComponent", FeaturedItemComponent);
        }
    }
});
//# sourceMappingURL=featuredItem.component.js.map