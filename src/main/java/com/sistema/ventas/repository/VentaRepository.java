package com.sistema.ventas.repository;

import com.sistema.ventas.model.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VentaRepository extends JpaRepository<Venta, Long> {
    List<Venta> findByVendedorUsername(String username);
}
