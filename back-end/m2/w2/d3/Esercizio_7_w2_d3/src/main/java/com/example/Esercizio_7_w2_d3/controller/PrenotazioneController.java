package com.example.Esercizio_7_w2_d3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Esercizio_7_w2_d3.modules.Prenotazione;
import com.example.Esercizio_7_w2_d3.servizi.PrenotationService;

@RestController
@RequestMapping("/prenotazioni")
public class PrenotazioneController {
	
	@Autowired PrenotationService prepService;
	
	@PostMapping
	public ResponseEntity<Prenotazione> creaPrenotazione(@RequestBody Prenotazione prenotazione){
		return new ResponseEntity<Prenotazione>(prepService.salvaPrenotazione(prenotazione, 1l, 1l), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Prenotazione>> getAllPrenotazioni(){
		return new ResponseEntity<List<Prenotazione>>(prepService.getAllPrenotations(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Prenotazione> getPrenotazioneById(@PathVariable Long id){
		return new ResponseEntity<Prenotazione>(prepService.getPrenoById(id), HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Prenotazione> updatePrenotazione(@RequestBody Prenotazione prenotazione){
		return new ResponseEntity<Prenotazione>(prepService.updatePrenotazione(prenotazione), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deletePrenotazione(@PathVariable Long id){
		return new ResponseEntity<String>(prepService.eliminaPrenotazione(id), HttpStatus.OK);
	}
	
}
