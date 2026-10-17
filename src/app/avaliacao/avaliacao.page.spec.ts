import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab4Page } from './avaliacao.page';
import { UserService } from '../core/services/user.service';

describe('Tab4Page', () => {
  let component: Tab4Page;
  let fixture: ComponentFixture<Tab4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('switches between professional and client review data', () => {
    const userService = TestBed.inject(UserService);
    expect(component.tipoUsuario).toBe('cliente');
    expect(component.profissionais[0].profissao).toBe('Encanador');

    userService.alternarVisao();

    expect(component.tipoUsuario).toBe('profissional');
    expect(component.profissionais[0].profissao).toBe('Cliente');
  });
});
