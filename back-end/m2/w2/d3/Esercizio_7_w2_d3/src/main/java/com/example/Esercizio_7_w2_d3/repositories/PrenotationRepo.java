package com.example.Esercizio_7_w2_d3.repositories;

import java.time.LocalDate;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Esercizio_7_w2_d3.modules.Postazione;
import com.example.Esercizio_7_w2_d3.modules.Prenotazione;
import com.example.Esercizio_7_w2_d3.modules.Utente;

@Repository
public interface PrenotationRepo extends CrudRepository<Prenotazione, Long> {
	
	public boolean existsByData(LocalDate data);
	public boolean existsByUtente(Utente utente);
	public boolean existsByPostazione(Postazione postazione);
	
}
