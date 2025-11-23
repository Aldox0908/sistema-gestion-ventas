import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: CatalogoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];