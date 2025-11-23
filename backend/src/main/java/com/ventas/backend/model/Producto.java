package com.ventas.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto {
private String imagen;

public String getImagen() { return imagen; }
public void setImagen(String imagen) { this.imagen = imagen; }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public String nombre;
    public Double precio;
    public Integer stock;

    public Producto() {
    }
}
