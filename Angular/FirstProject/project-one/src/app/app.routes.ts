import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { LogOutComponent } from './components/pages/log-out/log-out.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';

export const routes: Routes = [
    {path:'home',title:'HomePage',component:HomeComponent},
    {path:'',title:'HomePage',component:HomeComponent},
    {path:'about',title:'About',component:AboutComponent},
    {path:'**',title:'NotFound',component:NotFoundComponent},
    {path:'contacts',title:'Contacts',component:ContactsComponent},
    {path:'logout',title:'Logout',component:LogOutComponent},
    {path:'logout',title:'Logout',component:LogOutComponent},
    {path:'login',title:'Login',component:LoginComponent},
    {path:'Products',title:'Products',component:ProductsComponent},
    {path:'sign-up',title:'Sign-up',component:SignUpComponent},
];
