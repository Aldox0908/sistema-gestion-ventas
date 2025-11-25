import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/login">Login</a> |
      <a routerLink="/admin">Admin</a> |
      <a routerLink="/ventas">Ventas</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'sistema-gestion-ventas';
}
