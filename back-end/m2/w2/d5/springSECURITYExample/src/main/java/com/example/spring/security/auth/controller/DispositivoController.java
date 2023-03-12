package com.example.spring.security.auth.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.dispositivi.Dispositivo;
import com.example.spring.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class DispositivoController {

	@Autowired UserService service;

	@PostMapping("/dispositivi")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Dispositivo> createDispositivo(@Valid @RequestBody Dispositivo dispositivo) {
		return new ResponseEntity<Dispositivo>(service.createDisp(dispositivo), HttpStatus.OK);
	}
	
	@GetMapping("/dispositivi")
	public ResponseEntity<List<Dispositivo>> getAllDispositivi() {
		return new ResponseEntity<List<Dispositivo>>(service.getAllDispositivi(), HttpStatus.OK);
	}
	
	@GetMapping("/dispositivi/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Dispositivo> getDispositivoById(@PathVariable Long id) {
		return new ResponseEntity<Dispositivo>(service.getDispoById(id), HttpStatus.OK);
	}
	
	@PutMapping("/dispositivi/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Dispositivo> updateDispositivo(@Valid @RequestBody Dispositivo dispositivo) {
		return new ResponseEntity<Dispositivo>(service.updateDispo(dispositivo), HttpStatus.OK);
	}
	
	@DeleteMapping("/dispositivi/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> deleteDispositivo(@PathVariable Long id) {
		return new ResponseEntity<String>(service.removeDispo(id), HttpStatus.OK);
	}
	
}
