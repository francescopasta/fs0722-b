package com.example.PrenotazioniGestione.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.PrenotazioniGestione.modules.Prenotazione;

@Repository
public interface PrenotationRepo extends CrudRepository<Prenotazione, Long> {
	
}
