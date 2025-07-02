import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  pedido: any = null;

  setPedido(dados: any) {
    this.pedido = dados;
  }

  getPedido() {
    return this.pedido;
  }

  reset() {
    this.pedido = null;
  }
}
