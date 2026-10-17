import { Component, inject } from '@angular/core';
import {
  IonApp,
  IonAvatar,
  IonBadge,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { construct, logOut, person } from 'ionicons/icons';
import { clientUserMock, professionalUserMock } from './mocks/mock-data';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [
    IonApp,
    IonAvatar,
    IonBadge,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    RouterLink,
  ],
})
export class AppComponent {
  readonly userService = inject(UserService);

  constructor() {
    addIcons({ construct, logOut, person });
  }

  get usuario() {
    return this.userService.tipoUsuario() === 'profissional'
      ? professionalUserMock
      : clientUserMock;
  }
}
