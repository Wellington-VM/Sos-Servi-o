import {
  clientProfileReviewsMock,
  clientUserMock,
  professionalProfileReviewsMock,
  professionalUserMock,
} from '../mocks/mock-data';
import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonToolbar,
  IonIcon,
  IonCardContent,
} from '@ionic/angular';
import {
  notifications,
  locationOutline,
  star,
  createOutline,
  chatbubbleEllipsesOutline,
  starHalf,
  starOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { UserService, type TipoUsuario } from '../core/services/user.service';
import { RouterLink } from '@angular/router';

interface Profissional {
  id: number;
  nome: string;
  profissao: string;
  foto: string;
  nota: number;
  data: string;
  tipoStatus: string;
  avaliacao: string;
  qtdAvaliacoes: number;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonBadge,
    IonCard,
    IonAvatar,
    IonCardContent,
    RouterLink,
  ],
})
export class Tab5Page {
  readonly userService = inject(UserService);
  @ViewChild(IonContent) content!: IonContent;

  ionViewWillEnter() {
    this.content?.scrollToTop(0);
  }

  get tipoUsuario(): TipoUsuario {
    return this.userService.tipoUsuario();
  }

  get usuario() {
    return this.tipoUsuario === 'profissional'
      ? professionalUserMock
      : clientUserMock;
  }

  getEstrelas(nota: number): string[] {
    const estrelas: string[] = [];

    for (let i = 1; i <= 5; i++) {
      if (nota >= i) {
        estrelas.push('star');
      } else if (nota >= i - 0.7) {
        estrelas.push('star-half');
      } else {
        estrelas.push('star-outline');
      }
    }

    return estrelas;
  }

  get profissionais(): Profissional[] {
    return this.tipoUsuario === 'profissional'
      ? professionalProfileReviewsMock
      : clientProfileReviewsMock;
  }

  constructor() {
    addIcons({
      notifications,
      locationOutline,
      star,
      createOutline,
      chatbubbleEllipsesOutline,
      starHalf,
      starOutline,
    });
  }
}
