import {Component} from '@angular/core';

//import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router'
//or
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'

import {HeaderComponent} from './confusionComponents/HeaderComponent/header.component'
import {FooterComponent} from './confusionComponents/FooterComponent/footer.component'
import {HomeComponent} from './confusionComponents/HomeComponent/home.component'
import {AboutComponent} from './confusionComponents/AboutComponent/about.component'
import {ContactComponent} from './confusionComponents/ContactComponent/contact.component'
import {MenuComponent} from './confusionComponents/MenuComponent/menu.component'
import {DishDetailComponent} from './confusionComponents/DishDetailComponent/dishDetail.component'
import {FavoriteComponent} from './confusionComponents/FavoriteComponent/favorite.component'


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent,  useAsDefault:true},
    { path: '/home', name: 'Home', component: HomeComponent},
    { path: '/aboutus', name: 'About', component: AboutComponent},
    { path: '/contactus', name: 'Contact', component: ContactComponent},
    { path: '/menu', name: 'Menu', component: MenuComponent},
    { path:'/menu/:id', name: 'DishDetails', component: DishDetailComponent},
    { path:'/favorites', name: 'Favorites', component: FavoriteComponent},     
    { path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/confusionMainPage.html',
    styleUrls: ['app/styles/mystyles.css', '/app/styles/bootstrap-social.css'],
    directives: [   HeaderComponent,
                    FooterComponent,
                    ROUTER_DIRECTIVES
                    ]
})

export class AppComponent {  
    
   
 }