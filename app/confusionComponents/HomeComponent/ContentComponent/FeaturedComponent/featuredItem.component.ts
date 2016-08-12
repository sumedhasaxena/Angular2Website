import {Component, Input} from '@angular/core';

@Component({
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
})
export class FeaturedItemComponent{
    @Input() title;
    @Input() showFeaturedItem;
    @Input() message;
    @Input() image;
    @Input() name;
    @Input() label;
    @Input() price;
    @Input() description;
    @Input() designation;
    @Input() isFoodItem;
    @Input() isLeftOriented;
}