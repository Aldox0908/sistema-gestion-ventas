import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <div>
        <label>Username:</label>
        <input type="text" [(ngModel)]="username" name="username" required>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" [(ngModel)]="password" name="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/ventas']); // Redirigir a ventas por defecto
      },
      error: (err) => {
        this.errorMessage = 'Credenciales inválidas';
      }
    });
  }
}
