import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonRadio,
  IonRadioGroup,
} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-se',
  templateUrl: './registrar-se.page.html',
  styleUrls: ['./registrar-se.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    CommonModule,
    FormsModule,
    IonInput,
    IonButton,
    IonRadio,
    IonRadioGroup,
  ],
})
export class RegistrarSePage {
  private readonly router = inject(Router);

  tipoPerfil: string = 'cliente';

  prosseguir() {
    if (this.tipoPerfil === 'cliente') {
      this.router.navigate(['/tabs/tab1']);
    } else if (this.tipoPerfil === 'profissional') {
      this.router.navigate(['/registrar-tipo']);
    }
  }
}
