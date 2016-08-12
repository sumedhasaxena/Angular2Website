
import {Component} from '@angular/core';

//import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router'
//or
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'

import {ContentComponent} from './ContentComponent/content.component'

@Component({
selector: 'home',
template: `
<content></content>
`,
directives: [ContentComponent] 
})
export class HomeComponent{

}