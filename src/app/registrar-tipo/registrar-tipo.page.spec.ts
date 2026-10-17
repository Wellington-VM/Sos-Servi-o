import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RegistrarTipoPage } from './registrar-tipo.page';

describe('RegistrarTipoPage', () => {
  let component: RegistrarTipoPage;
  let fixture: ComponentFixture<RegistrarTipoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    fixture = TestBed.createComponent(RegistrarTipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
