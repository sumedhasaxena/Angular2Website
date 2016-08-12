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
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ContactComponent = class ContactComponent {
                constructor() {
                    this.feedback = {
                        myChannel: "",
                        firstName: "",
                        lastName: "",
                        agree: false,
                        email: "",
                        areaCode: "",
                        telNumber: ""
                    };
                    this.channels = [{
                            value: "tel",
                            label: "Tel."
                        }, {
                            value: "Email",
                            label: "Email"
                        }];
                    this.invalidChannelSelection = false;
                    this.sendFeedback = function (feedbackForm) {
                        if (this.feedback.agree && (this.feedback.mychannel == "")) {
                            this.invalidChannelSelection = true;
                        }
                        else {
                            this.invalidChannelSelection = false;
                            //TODO
                            //this.feedbackFactory.save(this.feedback);
                            this.feedback = {
                                mychannel: "",
                                firstName: "",
                                lastName: "",
                                agree: false,
                                email: ""
                            };
                            this.feedback.mychannel = "";
                        }
                    };
                }
            };
            ContactComponent = __decorate([
                core_1.Component({
                    selector: 'contact',
                    templateUrl: '/app/confusionComponents/ContactComponent/contactTemplate.html',
                    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css']
                }), 
                __metadata('design:paramtypes', [])
            ], ContactComponent);
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map