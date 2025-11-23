package com.ventas.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ventas.backend.model.Venta;

public interface VentaRepository extends JpaRepository<Venta, Integer> {
}
