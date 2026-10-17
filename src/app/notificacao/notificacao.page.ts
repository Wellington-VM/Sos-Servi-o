import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonAvatar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { UserService, type TipoUsuario } from '../core/services/user.service';

export interface Notificacao {
  id: number;
  nome: string;
  avatar: string;
  mensagem: string;
  tempo: string;
  lida: boolean;
}

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.page.html',
  styleUrls: ['./notificacao.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonButtons,
    IonIcon,
    RouterLink,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonAvatar,
  ],
})
export class NotificacaoPage {
  readonly userService = inject(UserService);

  get tipoUsuario(): TipoUsuario {
    return this.userService.tipoUsuario();
  }

  // Lista para a visão CLIENTE
  private notificacoesCliente: Notificacao[] = [
    {
      id: 1,
      nome: 'Marcos Mion',
      avatar: 'assets/Icones_pessoas/Homem1.jpg',
      mensagem: 'enviou uma mensagem para você.',
      tempo: 'Há 2 min',
      lida: false,
    },
    {
      id: 2,
      nome: 'Ana Souza',
      avatar: 'assets/Icones_pessoas/Mulher1.jpg',
      mensagem: 'aceitou sua solicitação de serviço: "Troca de Fiação".',
      tempo: 'Há 15 min',
      lida: false,
    },
    {
      id: 3,
      nome: 'Carlos Eduardo',
      avatar: 'assets/Icones_pessoas/Homem2.jpg',
      mensagem: 'cancelou sua solicitação de serviço: "Pintura de Parede".',
      tempo: 'Há 1 hora',
      lida: true,
    },
    {
      id: 4,
      nome: 'Fernanda Lima',
      avatar: 'assets/Icones_pessoas/Mulher2.jpg',
      mensagem: 'confirmou a visita técnica para o dia 20/10, às 14h.',
      tempo: 'Ontem',
      lida: true,
    },
    {
      id: 5,
      nome: 'Rayane Freira',
      avatar: 'assets/Icones_pessoas/Mulher9.jpg',
      mensagem: 'Cancelou a visita técnica para o dia 11/10, às 10h.',
      tempo: 'Ontem',
      lida: true,
    },
  ];

  // Lista para a visão PROFISSIONAL
  private notificacoesProfissional: Notificacao[] = [
    {
      id: 6,
      nome: 'Lucas Mendes',
      avatar: 'assets/Icones_pessoas/Homem2.jpg',
      mensagem: 'enviou uma mensagem para você.',
      tempo: 'Há 5 min',
      lida: false,
    },
    {
      id: 7,
      nome: 'Mariana Costa',
      avatar: 'assets/Icones_pessoas/Mulher1.jpg',
      mensagem:
        'solicitou um agendamento para o serviço: "Manutenção Elétrica".',
      tempo: 'Há 40 min',
      lida: false,
    },
    {
      id: 8,
      nome: 'Roberto Silva',
      avatar: 'assets/Icones_pessoas/Homem7.jpg',
      mensagem: 'confirmou a visita técnica reagendada para terça-feira.',
      tempo: 'Há 3 horas',
      lida: true,
    },
    {
      id: 9,
      nome: 'Beatriz Ramos',
      avatar: 'assets/Icones_pessoas/Mulher2.jpg',
      mensagem: 'cancelou a solicitação de serviço: "Reparo de Encanamento".',
      tempo: 'Ontem',
      lida: true,
    },
    {
      id: 10,
      nome: 'Wesley Souza',
      avatar: 'assets/Icones_pessoas/Homem3.jpg',
      mensagem: 'solicitou um reagendamento para o dia 20/09, às 15h.',
      tempo: 'Ontem',
      lida: true,
    },
  ];

  get notificacoes(): Notificacao[] {
    return this.tipoUsuario === 'profissional'
      ? this.notificacoesProfissional
      : this.notificacoesCliente;
  }

  constructor() {
    addIcons({ arrowBackOutline });
  }
}
