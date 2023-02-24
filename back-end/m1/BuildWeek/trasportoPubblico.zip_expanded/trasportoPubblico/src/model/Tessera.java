package model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Tessera implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idTessera;

	private LocalDate dataInizio;
	private LocalDate dataFine;

	@OneToOne(mappedBy = "tessera")
	private Abbonamento abbonamento;

	@OneToOne
	@JoinColumn(name = "idutente")
	private Utente utente;

	public Tessera() {
		super();
	}

	

	public LocalDate getDataInizio() {
		return dataInizio;
	}



	public void setDataInizio(LocalDate dataInizio) {
		this.dataInizio = dataInizio;
	}



	public LocalDate getDataFine() {
		return dataFine;
	}



	public void setDataFine(LocalDate dataFine) {
		this.dataFine = dataFine;
	}



	public Abbonamento getAbbonamento() {
		return abbonamento;
	}



	public void setAbbonamento(Abbonamento abbonamento) {
		this.abbonamento = abbonamento;
	}



	public Utente getUtente() {
		return utente;
	}



	public void setUtente(Utente utente) {
		this.utente = utente;
	}



	public Integer getIdTessera() {
		return idTessera;
	}



	@Override
	public String toString() {
		return "Tessera [idTessera=" + idTessera + ", dataInizio=" + dataInizio + ", dataFine=" + dataFine
				+ ", getAbbonamento()=" + getAbbonamento() + "]";
	}

}
