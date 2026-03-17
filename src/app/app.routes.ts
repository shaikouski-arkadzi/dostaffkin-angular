import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Order } from './pages/order/order';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'order',
    component: Order,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
