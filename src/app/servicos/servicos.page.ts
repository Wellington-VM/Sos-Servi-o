import {
  clientServicesMock,
  professionalServicesMock,
} from '../mocks/mock-data';
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonBadge,
  IonLabel,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonTextarea,
  IonMenuButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  notifications,
  locationOutline,
  star,
  starHalf,
  starOutline,
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { UserService, type TipoUsuario } from '../core/services/user.service';

interface Profissional {
  id: number;
  categoriaId: string;
  nome: string;
  profissao: string;
  foto: string;
  localizacao: string;
  status: string;
  tipoStatus: string;
  tiposervico: string;
  sobremim: string;
  qtdAvaliacoes?: number;
  nota?: number;
}

@Component({
  selector: 'app-tab3',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonIcon,
    IonBadge,
    IonLabel,
    IonCard,
    IonCardContent,
    IonAvatar,
    IonModal,
    IonTextarea,
  ],
})
export class Tab3Page {
  @ViewChild(IonContent) content!: IonContent;
  readonly userService = inject(UserService);
  private readonly cdr = inject(ChangeDetectorRef);
  modalAberto = false;
  profissionalSelecionado: any = null;
  notaEdicao: number = 0;
  abaSelecionada: 'aceitos' | 'pendentes' | 'Finalizados' = 'aceitos';

  get tipoUsuario(): TipoUsuario {
    return this.userService.tipoUsuario();
  }

  abrirModal(profissional: any) {
    this.profissionalSelecionado = profissional;
    this.notaEdicao = 0;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.notaEdicao = 0;
  }

  getEstrelas(nota: number): string[] {
    const estrelas: string[] = [];

    if (!nota || nota === 0) {
      return [
        'star-outline',
        'star-outline',
        'star-outline',
        'star-outline',
        'star-outline',
      ];
    }

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
      ? professionalServicesMock
      : clientServicesMock;
  }

  get profissionaisFiltrados(): Profissional[] {
    if (this.abaSelecionada === 'aceitos') {
      return this.profissionais.filter(
        (p) => p.tipoStatus === 'andamento' || p.tipoStatus === 'agendado',
      );
    }
    if (this.abaSelecionada === 'pendentes') {
      return this.profissionais.filter((p) => p.tipoStatus === 'pendente');
    }
    if (this.abaSelecionada === 'Finalizados') {
      return this.profissionais.filter(
        (p) => p.tipoStatus === 'cancelado' || p.tipoStatus === 'concluido',
      );
    }
    return this.profissionais;
  }

  selecionarAba(aba: 'aceitos' | 'pendentes' | 'Finalizados') {
    this.abaSelecionada = aba;
  }

  ionViewWillEnter() {
    this.abaSelecionada = 'aceitos';
    this.cdr.detectChanges();
    this.content?.scrollToTop(0);
  }

  constructor() {
    addIcons({ notifications, locationOutline, star, starHalf, starOutline });
  }
}
