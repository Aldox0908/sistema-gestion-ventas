import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos-lista.component.html'
})
export class ProductosListaComponent implements OnInit {

  productos: any[] = [];

  constructor(private service: ProductoService) {}

  ngOnInit() {
    this.service.listar().subscribe(data => {
      console.log("Productos cargados:", data);
      this.productos = data;
    });
  }
}
