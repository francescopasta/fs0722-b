package com.example.PrenotazioniGestione.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.PrenotazioniGestione.modules.Postazione;
import com.example.PrenotazioniGestione.modules.TipoPostazione;

@Repository
public interface PostationRepo extends CrudRepository<Postazione, Long> {
	
		List<Postazione> findByTipo(TipoPostazione tipo);
		
}
