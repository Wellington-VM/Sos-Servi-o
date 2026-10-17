import { clientReviewsMock, professionalReviewsMock } from '../mocks/mock-data';
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBadge,
  IonIcon,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonTextarea,
  IonModal,
  IonLabel,
  IonMenuButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  notifications,
  starHalf,
  star,
  createOutline,
  starOutline,
} from 'ionicons/icons';
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
  selector: 'app-tab4',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonButton,
    IonBadge,
    IonCard,
    IonCardContent,
    IonAvatar,
    IonMenuButton,
    IonModal,
    IonTextarea,
    IonLabel,
    RouterLink,
  ],
})
export class Tab4Page {
  @ViewChild(IonContent) content!: IonContent;
  readonly userService = inject(UserService);
  private readonly cdr = inject(ChangeDetectorRef);
  modalAberto = false;
  profissionalSelecionado: any = null;
  abaSelecionada: string = 'Avaliacao-recebida';
  notaEdicao: number = 5;

  get tipoUsuario(): TipoUsuario {
    return this.userService.tipoUsuario();
  }

  abrirModal(profissional: any) {
    this.profissionalSelecionado = profissional;
    this.notaEdicao = profissional.nota || 5;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  get profissionaisFiltrados(): Profissional[] {
    if (this.abaSelecionada === 'Avaliacao-recebida') {
      return this.profissionais.filter((p) => p.tipoStatus === 'recebido');
    }
    if (this.abaSelecionada === 'Avaliacao-dada') {
      return this.profissionais.filter((p) => p.tipoStatus === 'dada');
    }
    return this.profissionais;
  }

  selecionarAba(aba: string) {
    this.abaSelecionada = aba;
  }

  ionViewWillEnter() {
    this.abaSelecionada = 'Avaliacao-recebida';
    this.cdr.detectChanges();
    this.content?.scrollToTop(0);
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
      ? professionalReviewsMock
      : clientReviewsMock;
  }

  constructor() {
    addIcons({ notifications, star, starHalf, starOutline, createOutline });
  }
}
