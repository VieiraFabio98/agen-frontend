import { Routes } from '@angular/router';
import { Intro } from './pages/intro/intro';
import { Login } from './pages/login/login';
import { Default } from './layout/default/default';

export const routes: Routes = [
  {
    path: '',
    component: Intro
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'home',
    component: Default,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home)
      },
    ]
  },
  { path: '**', redirectTo: '' }
]
