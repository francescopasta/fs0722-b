package com.example.PrenotazioniGestione.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.PrenotazioniGestione.modules.Edificio;

@Repository
public interface EdificioRepo extends CrudRepository<Edificio, Long> {
	
		List<Edificio> findByCitta(String citta);
	
}
