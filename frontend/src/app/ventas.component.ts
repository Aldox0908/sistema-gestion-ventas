import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-ventas',
  template: `
    <h2>Mis Ventas</h2>
    <div *ngIf="isAdmin">
        <p><i>Vista de Administrador: Viendo todas las ventas</i></p>
    </div>

    <div style="margin-bottom: 20px; border: 1px solid #ccc; padding: 10px;">
        <h3>Registrar Nueva Venta</h3>
        <label>Producto: <input [(ngModel)]="nuevaVenta.producto" /></label><br>
        <label>Cantidad: <input type="number" [(ngModel)]="nuevaVenta.cantidad" /></label><br>
        <label>Precio Unitario: <input type="number" [(ngModel)]="nuevaVenta.precioUnitario" /></label><br>
        <button (click)="registrarVenta()">Registrar</button>
    </div>

    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio U.</th>
          <th>Total</th>
          <th>Fecha</th>
          <th *ngIf="isAdmin">Vendedor</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let venta of ventas">
          <td>{{ venta.id }}</td>
          <td>{{ venta.producto }}</td>
          <td>{{ venta.cantidad }}</td>
          <td>{{ venta.precioUnitario }}</td>
          <td>{{ venta.total }}</td>
          <td>{{ venta.fecha }}</td>
          <td *ngIf="isAdmin">{{ venta.vendedor?.username }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class VentasComponent implements OnInit {
  ventas: any[] = [];
  nuevaVenta: any = {
      producto: '',
      cantidad: 1,
      precioUnitario: 0
  };
  isAdmin = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkRole();
    this.cargarVentas();
  }

  checkRole() {
      // Simplemente decodificamos el token para ver el rol (inseguro en frontend, solo visual)
      const token = localStorage.getItem('token');
      if(token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          // El rol viene como array o string dependiendo de la implementacion,
          // aqui asumimos que viene en el claim 'roles' o similar.
          // En UserDetailsServiceImpl lo pusimos como 'roles'.
          // JJWT lo suele poner en "roles" si usamos authorities, o podemos buscarlo.
          // Vamos a asumir que si el usuario es admin, el backend devuelve el rol.
          // Para simplificar, si el login fue con admin, mostramos columna extra.
          if(payload.sub === 'admin') {
              this.isAdmin = true;
          }
      }
  }

  cargarVentas() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(`${environment.apiUrl}/ventas`, { headers })
      .subscribe({
        next: (data) => this.ventas = data,
        error: (err) => console.error('Error al obtener ventas', err)
      });
  }

  registrarVenta() {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.post(`${environment.apiUrl}/ventas`, this.nuevaVenta, { headers })
        .subscribe({
            next: (res) => {
                alert('Venta registrada');
                this.nuevaVenta = { producto: '', cantidad: 1, precioUnitario: 0 };
                this.cargarVentas();
            },
            error: (err) => alert('Error al registrar venta')
        });
  }
}
