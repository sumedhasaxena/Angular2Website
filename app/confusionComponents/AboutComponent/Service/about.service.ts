import {Http} from '@angular/http'
import {Observable} from 'rxjs/rx'
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core'

import {AppSettings} from './../../AppSettings.settings'


@Injectable() //makes service ready for injection in other classes
export class AboutService{
    
    private baseUrl = AppSettings.API_ENDPOINT;
   
    constructor(private http: Http){
       
    }
    
   getLeaders(){

          return this.http.get(this.baseUrl + "leadership")
            .map(res=>res.json());
    }    
 
}