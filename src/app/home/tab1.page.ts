import { homeCategoriesMock, homeProfessionalsMock } from '../mocks/mock-data';
import { Component, inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonButton,
  IonButtons,
  IonAvatar,
  IonChip,
  IonCol,
  IonGrid,
  IonRow,
  IonItem,
  IonBadge,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonDatetime,
  IonDatetimeButton,
  IonTextarea,
  IonModal,
  IonMenuButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  notifications,
  chevronDownOutline,
  arrowForward,
  locationOutline,
  star,
  logOut,
  chevronForwardOutline,
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService, type TipoUsuario } from '../core/services/user.service';

interface Profissional {
  id: number;
  categoriaId: string;
  nome: string;
  profissao: string;
  foto: string;
  localizacao: string;
  avaliacao: number;
  qtdAvaliacoes: number;
  qtdServicos: number;
  tags: string[];
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonIcon,
    IonButton,
    IonButtons,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonDatetimeButton,
    IonMenuButton,
    IonItem,
    IonBadge,
    IonLabel,
    IonCol,
    IonGrid,
    IonRow,
    IonAvatar,
    IonChip,
    IonModal,
    IonTextarea,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
    RouterLink,
  ],
})
export class Tab1Page {
  readonly userService = inject(UserService);
  private readonly cdr = inject(ChangeDetectorRef);
  @ViewChild(IonContent) content!: IonContent;

  ionViewWillEnter() {
    this.idSelecionado = '';
    this.cdr.detectChanges();
    this.content?.scrollToTop(0);
  }

  get tipoUsuario(): TipoUsuario {
    return this.userService.tipoUsuario();
  }

  modalAberto = false;
  profissionalSelecionado: any = null;

  abrirModal(profissional: any) {
    this.profissionalSelecionado = profissional;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  idSelecionado: number | string | null = null;

  itens = homeCategoriesMock;

  selecionarItem(id: number | string) {
    this.idSelecionado = this.idSelecionado === id ? null : id;
  }

  get profissionaisFiltrados(): Profissional[] {
    if (this.idSelecionado) {
      return this.profissionais.filter(
        (p) => p.categoriaId === this.idSelecionado,
      );
    }

    const destaques: Profissional[] = [];

    this.itens.forEach((categoria) => {
      const primeiroDaCategoria = this.profissionais.find(
        (p) => p.categoriaId === categoria.id,
      );
      if (primeiroDaCategoria) {
        destaques.push(primeiroDaCategoria);
      }
    });

    return destaques;
  }

  profissionais: Profissional[] = homeProfessionalsMock;

  constructor() {
    addIcons({
      notifications,
      arrowForward,
      star,
      locationOutline,
      chevronForwardOutline,
      chevronDownOutline,
      logOut,
    });
  }
}
