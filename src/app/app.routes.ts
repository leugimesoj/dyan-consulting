import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./shared/layout/layout').then((m) => m.Layout),
    children: [
      { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
      {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services/services').then((m) => m.Services),
      },
      {
        path: 'ddo',
        loadComponent: () => import('./pages/ddo/ddo').then((m) => m.Ddo),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
      },
      {
        path: 'recruitment',
        loadComponent: () => import('./pages/recuirtment/recuirtment').then((m) => m.Recuirtment),
      },
      {
        path: 'payroll',
        loadComponent: () => import('./pages/payroll/payroll').then((m) => m.Payroll),
      },
      {
        path: 'procedures',
        loadComponent: () => import('./pages/procedures/procedures').then((m) => m.Procedures),
      },
      {
        path: 'training',
        loadComponent: () => import('./pages/training/training').then((m) => m.Training),
      },
    ],
  },
];
