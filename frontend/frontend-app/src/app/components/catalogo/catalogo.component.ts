import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  productos: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    fetch('http://localhost:8080/api/productos')
      .then(r => r.json())
      .then(data => this.productos = data);
  }

  agregar(p: any) {
    this.carritoService.agregarProducto(p);
  }
}
