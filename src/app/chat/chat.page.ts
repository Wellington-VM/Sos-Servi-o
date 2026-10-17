import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonMenuButton,
  IonTitle,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { happy, attach, camera, arrowBackOutline } from 'ionicons/icons';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonFooter,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonAvatar,
    IonMenuButton,
    RouterLink,
    IonTitle,
  ],
})
export class ChatPage implements OnInit {
  private readonly route = inject(ActivatedRoute);

  profissional = {
    nome: 'Profissional',
    funcao: 'Prestador de Serviço',
    foto: 'assets/avatar-padrao.png',
  };

  constructor() {
    addIcons({ happy, attach, camera, arrowBackOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['nome']) {
        this.profissional.nome = params['nome'];
        this.profissional.funcao = params['funcao'] || 'Profissional';
        this.profissional.foto = params['foto'] || this.profissional.foto;
      }
    });
  }
}
