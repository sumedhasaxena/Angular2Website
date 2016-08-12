import {Http} from '@angular/http'
import {Observable} from 'rxjs/rx'
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core'

import {AppSettings} from './../../AppSettings.settings'

@Injectable() //makes service ready for injection in other classes
export class MenuService{
    
    private baseUrl = AppSettings.API_ENDPOINT;
   
    constructor(private http: Http){
       
    }
    
   getDishes(){

            return this.http.get(this.baseUrl + "dishes")
            .map(res=>res.json());   
       
    } 
 
 
}