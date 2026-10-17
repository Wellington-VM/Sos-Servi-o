import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrar-tipo',
  templateUrl: './registrar-tipo.page.html',
  styleUrls: ['./registrar-tipo.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    RouterLink,
    IonButton,
    IonInput,
    IonSelect,
    IonSelectOption,
  ],
})
export class RegistrarTipoPage {}
