package com.example.PrenotazioniGestione.modules;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Prenotazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPrenotazione;
	private LocalDate data;
	@OneToOne
	@JoinColumn(name = "idPostazione")
	private Postazione postazione;
	@ManyToOne()
	@JoinColumn(name = "idUtente")
	private Utente utente;
	
	@Override
	public String toString() {
		return "Prenotazione [idPrenotazione=" + idPrenotazione + ", data=" + data + ", postazione=" + postazione.toString()
				+ ", utente=" + utente.toString() + "]";
	}
	
}
