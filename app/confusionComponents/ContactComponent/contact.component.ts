import {Component} from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: '/app/confusionComponents/ContactComponent/contactTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css']
    
})
export class ContactComponent{

    feedback = {
            myChannel: "",
            firstName: "",
            lastName: "",
            agree: false,
            email: "",
            areaCode: "",
            telNumber: ""
        };

    channels = [{
            value: "tel",
            label: "Tel."
        }, {
            value: "Email",
            label: "Email"
        }];

        invalidChannelSelection = false;

        sendFeedback = function (feedbackForm) {


        if (this.feedback.agree && (this.feedback.mychannel == "")) {
            this.invalidChannelSelection = true;
        } else {
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
            //Alternate in Angular2 not found yet
            //feedbackForm.$setPristine();
        }
    };
}
