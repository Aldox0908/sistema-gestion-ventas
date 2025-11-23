import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: any[] = [];

  agregarProducto(producto: any) {
    this.carrito.push(producto);
  }

  obtenerCarrito() {
    return this.carrito;
  }

  total() {
    return this.carrito.reduce((sum, p) => sum + p.precio, 0);
  }
}
