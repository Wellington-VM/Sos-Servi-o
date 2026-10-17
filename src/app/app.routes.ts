import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registrar-se',
    loadComponent: () => import('./registrar-se/registrar-se.page').then( m => m.RegistrarSePage)
  },
  {
    path: 'registrar-tipo',
    loadComponent: () => import('./registrar-tipo/registrar-tipo.page').then( m => m.RegistrarTipoPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'notificacao',
    loadComponent: () => import('./notificacao/notificacao.page').then( m => m.NotificacaoPage)
  },
];