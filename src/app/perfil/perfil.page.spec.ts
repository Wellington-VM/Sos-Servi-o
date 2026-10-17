import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab5Page } from './perfil.page';
import { UserService } from '../core/services/user.service';

describe('Tab5Page', () => {
  let component: Tab5Page;
  let fixture: ComponentFixture<Tab5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('switches between professional and client profile data', () => {
    const userService = TestBed.inject(UserService);
    expect(component.usuario.nome).toBe('Layla Maysa');

    userService.alternarVisao();

    expect(component.usuario.nome).toBe('Marcos Mion');
  });
});
