package com.example.esercizio_RivelatoreFumo.modules;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class CentroControllo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idControllo;
	
	public void allarmeIncendio(Long id, int latitudine, int longitudine, int smokelevel) {
		System.out.println("http//:host/alarm?=idsonda=[" + id + "]&lat=[" + latitudine + "]&lon=[" + longitudine + "]&smokelevel=[" + smokelevel + "]");
	}
	
}
