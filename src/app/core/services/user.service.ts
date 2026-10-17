import { Injectable, signal } from '@angular/core';

export type TipoUsuario = 'cliente' | 'profissional';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _tipoUsuario = signal<TipoUsuario>('cliente');
  readonly tipoUsuario = this._tipoUsuario.asReadonly();

  alternarVisao(): void {
    this._tipoUsuario.update((tipoAtual) =>
      tipoAtual === 'cliente' ? 'profissional' : 'cliente',
    );
  }
}
