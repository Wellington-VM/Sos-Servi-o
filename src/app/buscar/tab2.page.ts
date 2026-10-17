import {
  searchCategoriesMock,
  searchServicesMock,
  searchProfessionalsMock,
} from '../mocks/mock-data';
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
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
  IonMenuButton,
  IonCol,
  IonGrid,
  IonRow,
  IonItem,
  IonBadge,
  IonLabel,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonTextarea,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  notifications,
  chevronDownOutline,
  arrowForward,
  locationOutline,
  star,
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface Categoria {
  id: string;
  nome: string;
  icone: string;
}

export interface Servico {
  id: string;
  categoriaPaiId: string;
  nome: string;
  icone: string;
}

export interface Profissional {
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
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonIcon,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonTextarea,
    IonDatetime,
    IonDatetimeButton,
    IonItem,
    IonBadge,
    IonLabel,
    IonCol,
    IonGrid,
    IonRow,
    IonAvatar,
    IonChip,
    IonModal,
    RouterLink,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
    FormsModule,
  ],
})
export class Tab2Page {
  public termoBusca: string = '';
  private readonly cdr = inject(ChangeDetectorRef);
  @ViewChild(IonContent) content!: IonContent;
  modalAberto = false;
  profissionalSelecionado: any = null;

  abrirModal(profissional: any) {
    this.profissionalSelecionado = profissional;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  categoriaSelecionadaId: string | null = null;
  servicoSelecionadoId: string | null = null;

  categorias: Categoria[] = searchCategoriesMock;

  itens: Servico[] = searchServicesMock;

  selecionarCategoria(id: string) {
    if (this.categoriaSelecionadaId === id) {
      this.categoriaSelecionadaId = null;
    } else {
      this.categoriaSelecionadaId = id;
    }
    this.servicoSelecionadoId = null;
  }

  selecionarServico(id: string) {
    this.servicoSelecionadoId = this.servicoSelecionadoId === id ? null : id;
  }

  get servicosFiltrados(): Servico[] {
    if (this.categoriaSelecionadaId) {
      return this.itens.filter(
        (item) => item.categoriaPaiId === this.categoriaSelecionadaId,
      );
    }
    return this.itens;
  }

  get profissionaisFiltrados(): Profissional[] {
    let resultado = this.profissionais;
    if (this.servicoSelecionadoId) {
      return this.profissionais.filter(
        (p) => p.categoriaId === this.servicoSelecionadoId,
      );
    } else if (this.categoriaSelecionadaId) {
      const idsServicosDaCategoria = this.servicosFiltrados.map((s) => s.id);
      resultado = resultado.filter((p) =>
        idsServicosDaCategoria.includes(p.categoriaId),
      );
    }

    if (this.termoBusca && this.termoBusca.trim() !== '') {
      const termo = this.termoBusca.toLowerCase().trim();
      resultado = resultado.filter(
        (p) =>
          p.nome.toLowerCase().includes(termo) ||
          p.profissao.toLowerCase().includes(termo),
      );
    }

    return resultado;
  }

  ionViewWillEnter() {
    this.categoriaSelecionadaId = '';
    this.servicoSelecionadoId = '';
    this.termoBusca = '';
    this.cdr.detectChanges();
    this.content?.scrollToTop(0);
  }

  profissionais: Profissional[] = searchProfessionalsMock;

  constructor() {
    addIcons({
      notifications,
      chevronDownOutline,
      arrowForward,
      locationOutline,
      star,
    });
  }
}
