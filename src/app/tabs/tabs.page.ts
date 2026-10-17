import { Component, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { search, home, person, construct, star } from 'ionicons/icons';
import { UserService, type TipoUsuario } from '../core/services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  readonly userService = inject(UserService);

  get tipoUsuario(): TipoUsuario {
    return this.userService.tipoUsuario();
  }

  constructor() {
    addIcons({ search, home, person, construct, star });
  }
}
