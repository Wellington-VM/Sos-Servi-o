import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Tab3Page } from './servicos.page';
import { UserService } from '../core/services/user.service';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('switches between professional and client service data', () => {
    const userService = TestBed.inject(UserService);
    expect(component.tipoUsuario).toBe('cliente');
    expect(component.profissionais[0].profissao).toBe('Encanador');

    userService.alternarVisao();

    expect(component.tipoUsuario).toBe('profissional');
    expect(component.profissionais[0].profissao).toBe('Cliente');
  });
});
