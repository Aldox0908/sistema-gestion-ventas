import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(private carritoService: CarritoService) {}

  get carrito() {
    return this.carritoService.obtenerCarrito();
  }

  total() {
    return this.carritoService.total();
  }
}
