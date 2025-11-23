import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private url = 'http://localhost:8080/api/productos';


  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.url);
  }
}
