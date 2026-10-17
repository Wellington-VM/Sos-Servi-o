import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../home/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../buscar/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../servicos/servicos.page').then((m) => m.Tab3Page),
      },
       {
        path: 'tab4',
        loadComponent: () =>
          import('../avaliacao/avaliacao.page').then((m) => m.Tab4Page),
      },
       {
        path: 'tab5',
        loadComponent: () =>
          import('../perfil/perfil.page').then((m) => m.Tab5Page),
      },
        {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
];
