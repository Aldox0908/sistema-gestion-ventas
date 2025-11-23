package com.ventas.backend.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ventas")
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    @Temporal(TemporalType.TIMESTAMP)
    public Date fecha;

    public Integer cantidad;
    public Double total;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    public Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    public Producto producto;

    public Venta() {
    }
}
