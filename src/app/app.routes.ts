import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { Hotels } from './hotels/hotels';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'registration',
    component: Registration
  },
  {
    path: 'hotels',
    component: Hotels
  }
];