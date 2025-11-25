package com.sistema.ventas.controller;

import com.sistema.ventas.model.Usuario;
import com.sistema.ventas.model.Venta;
import com.sistema.ventas.repository.UsuarioRepository;
import com.sistema.ventas.repository.VentaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ventas")
@RequiredArgsConstructor
public class VentasController {

    private final VentaRepository ventaRepository;
    private final UsuarioRepository usuarioRepository;

    @GetMapping
    public ResponseEntity<List<Venta>> getVentas() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();

        // Si es admin podria ver todas, pero aqui lo simplificamos a ver sus ventas o todas si es admin
        // Para este ejemplo, usuario ve solo sus ventas.
        // Implementar logica de roles si se requiere ver todas siendo admin.

        boolean isAdmin = auth.getAuthorities().stream()
                .anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));

        if(isAdmin){
            return ResponseEntity.ok(ventaRepository.findAll());
        } else {
             return ResponseEntity.ok(ventaRepository.findByVendedorUsername(username));
        }
    }

    @PostMapping
    public ResponseEntity<Venta> createVenta(@RequestBody Venta venta) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Usuario usuario = usuarioRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        venta.setVendedor(usuario);
        return ResponseEntity.ok(ventaRepository.save(venta));
    }
}
