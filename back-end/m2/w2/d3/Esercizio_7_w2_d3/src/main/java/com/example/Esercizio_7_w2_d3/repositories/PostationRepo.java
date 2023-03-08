package com.example.Esercizio_7_w2_d3.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Esercizio_7_w2_d3.modules.Postazione;
import com.example.Esercizio_7_w2_d3.modules.TipoPostazione;

@Repository
public interface PostationRepo extends CrudRepository<Postazione, Long> {
	
		List<Postazione> findByTipo(TipoPostazione tipo);
		
}
