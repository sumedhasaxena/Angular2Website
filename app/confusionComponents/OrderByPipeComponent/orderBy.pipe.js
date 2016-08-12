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
    var OrderByPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let OrderByPipe_1;
            let OrderByPipe = OrderByPipe_1 = class OrderByPipe {
                static orderByComparator(a, b) {
                    if (a == undefined || b == undefined)
                        return 0;
                    if ((isNaN(parseFloat(a))) || !isFinite(a) || (isNaN(parseFloat(b))) || !isFinite(b)) {
                        //not a number
                        if (a.toLowerCase() < b.toLowerCase())
                            return -1;
                        if (a.toLowerCase() > b.toLowerCase())
                            return 1;
                    }
                    else {
                        if (parseFloat(a) < parseFloat(b))
                            return -1;
                        if (parseFloat(a) > parseFloat(b))
                            return 1;
                    }
                    return 0; // equal
                }
                transform(value, args) {
                    console.log(args);
                    if (args == "" || args == "undefined") {
                        return value;
                    }
                    var asc = true;
                    var propertyToSortBy = (args) ? args.toString().toLocaleLowerCase() : "";
                    if (propertyToSortBy != "" && propertyToSortBy.substr(0, 1) == '-') {
                        asc = false;
                        propertyToSortBy = propertyToSortBy.substr(1);
                    }
                    return value.sort(function (a, b) {
                        return asc ?
                            OrderByPipe_1.orderByComparator(a[propertyToSortBy], b[propertyToSortBy])
                            : -OrderByPipe_1.orderByComparator(a[propertyToSortBy], b[propertyToSortBy]);
                    });
                }
            };
            OrderByPipe = OrderByPipe_1 = __decorate([
                core_1.Pipe({ name: 'orderBy' }), 
                __metadata('design:paramtypes', [])
            ], OrderByPipe);
            exports_1("OrderByPipe", OrderByPipe);
        }
    }
});
//# sourceMappingURL=orderBy.pipe.js.map