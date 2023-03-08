package com.example.Esercizio_7_w2_d3.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Esercizio_7_w2_d3.modules.Edificio;

@Repository
public interface EdificioRepo extends CrudRepository<Edificio, Long> {
	
		List<Edificio> findByCitta(String citta);
	
}
