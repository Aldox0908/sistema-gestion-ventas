package com.ventas.backend.controller;

import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.ventas.backend.model.Venta;
import com.ventas.backend.repository.VentaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/ventas")
public class VentaController {

    private final VentaRepository repo;

    public VentaController(VentaRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Venta> listar() {
        return repo.findAll();
    }

    @PostMapping
    public Venta crear(@RequestBody Venta v) {
        // Fecha automática al momento de registrar
        v.fecha = new Date();
        return repo.save(v);
    }
}
