import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {AboutService} from './Service/about.service'

@Component({
    selector: 'about',
    templateUrl: '/app/confusionComponents/AboutComponent/aboutTemplate.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    providers: [AboutService, HTTP_PROVIDERS]

})
export class AboutComponent implements OnInit{
 leaders: any[];

 message = "Loading...";

 constructor(private aboutService: AboutService){
     
     console.log("Getting leaders");
 }

 ngOnInit(){
     this.aboutService.getLeaders()
            .subscribe(res =>{
                this.leaders = res
            } ,
            null,
            () => {
                 this.message = "";
                  console.log("Call for leaders completed");

            })
 }
}