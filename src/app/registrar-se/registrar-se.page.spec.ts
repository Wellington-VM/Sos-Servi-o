import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarSePage } from './registrar-se.page';

describe('RegistrarSePage', () => {
  let component: RegistrarSePage;
  let fixture: ComponentFixture<RegistrarSePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
