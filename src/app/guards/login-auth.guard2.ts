import { HomeComponent } from "../components/home/home.component";
import { Login1Component } from '../components/login1/login1.component';
import { Routes } from '@angular/router';
import { NeedAuthGuard } from './login-auth.gauard';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [NeedAuthGuard] // <---- connected Route with guard
  },
  {
    path: 'login',
    component: Login1Component
  },
];