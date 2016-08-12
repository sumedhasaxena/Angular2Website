System.register(['@angular/core', '@angular/router-deprecated', '@angular/http', './Service/dishDetail.service', './../OrderByPipeComponent/orderBy.pipe', './../DatePipeComponent/datePipe.pipe'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, router_deprecated_2, http_1, dishDetail_service_1, orderBy_pipe_1, datePipe_pipe_1;
    var DishDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
                router_deprecated_2 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (dishDetail_service_1_1) {
                dishDetail_service_1 = dishDetail_service_1_1;
            },
            function (orderBy_pipe_1_1) {
                orderBy_pipe_1 = orderBy_pipe_1_1;
            },
            function (datePipe_pipe_1_1) {
                datePipe_pipe_1 = datePipe_pipe_1_1;
            }],
        execute: function() {
            let DishDetailComponent = class DishDetailComponent {
                constructor(_routeParams, dishDetailService) {
                    this._routeParams = _routeParams;
                    this.dishDetailService = dishDetailService;
                    this.showDish = false;
                    this.message = "Loading;";
                    this.formSubmitted = false;
                    this.orderText = "";
                    this.mycomment = {
                        rating: 5,
                        comment: ""
                    };
                    this.setRating = function (rating) {
                        this.mycomment.rating = rating;
                    };
                    this.submitComment = function (form) {
                        console.log(this.mycomment.rating);
                        console.log(this.mycomment.comment);
                        this.mycomment.rating = 5;
                        this.mycomment.comment = "";
                        this.formSubmitted = true;
                    };
                    this.dishId = _routeParams.get("id");
                }
                ngOnInit() {
                    if (this.dishId != null) {
                        this.dishDetailService.getDish(this.dishId)
                            .subscribe(res => {
                            this.dish = res;
                            console.log(this.dish.comments);
                            this.dishComments = this.dish.comments;
                        }, null, () => {
                            this.message = "";
                            this.showDish = true;
                            console.log("Call for dish completed");
                        });
                    }
                }
            };
            DishDetailComponent = __decorate([
                core_1.Component({
                    selector: 'dishDetail',
                    templateUrl: '/app/confusionComponents/DishDetailComponent/dishDetailTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                    providers: [dishDetail_service_1.DishDetailService, http_1.HTTP_PROVIDERS],
                    pipes: [orderBy_pipe_1.OrderByPipe, datePipe_pipe_1.CustomDatePipe]
                }), 
                __metadata('design:paramtypes', [router_deprecated_2.RouteParams, dishDetail_service_1.DishDetailService])
            ], DishDetailComponent);
            exports_1("DishDetailComponent", DishDetailComponent);
        }
    }
});
//# sourceMappingURL=dishDetail.component.js.map