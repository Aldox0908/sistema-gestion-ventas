package com.ventas.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ventas.backend.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
