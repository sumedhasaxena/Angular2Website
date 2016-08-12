import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {AppSettings} from './../../../AppSettings.settings'


@Injectable()
export class AuthService {

    private baseUrl = AppSettings.API_ENDPOINT;

    isLoggedIn;
    constructor(private http:Http) {
        
    }

    login(userCredentials) {
        // this.isLoggedIn = false;
        // var headers = new Headers();
        // var creds = 'username=' + usercreds.userName + '&password=' + usercreds.password;
        // headers.append('Content-Type', 'application/X-www-form-urlencoded');
        // return new Promise((resolve) => {
        //     this.http.post( this.baseUrl+ "users/login", creds, {headers: headers})
        //     .subscribe((data) => {
        //                             if(data.json().success)
        //                              {
        //                                 window.localStorage.setItem('auth_key', data.json().token);
        //                                 this.isLoggedIn = true;
        //                             }
        //                             resolve(this.isLoggedIn)
        //                         })
        
        //                     })

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl+ "users/login",        
                             JSON.stringify(userCredentials),
                              {headers: headers})
                        .map(res => res.json());
    }

 logout() {
   window.localStorage.removeItem('auth_key');
 }

 register(userInfo){

      var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl+ "users/register",        
                             JSON.stringify(userInfo),
                             {headers: headers})
                        .map(res => res.json());

 }
}
