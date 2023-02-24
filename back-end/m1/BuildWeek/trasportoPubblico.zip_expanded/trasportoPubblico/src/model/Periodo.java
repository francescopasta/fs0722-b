package model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import utils.StatoMezzo;

@Entity
public class Periodo implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer idPeriodo;
	private LocalDate dataInizio;
	private LocalDate dataFine;
	@Enumerated(EnumType.STRING)
	private StatoMezzo statoMezzo;

	@ManyToOne
	@JoinColumn(name = "idmezzo")
	private Mezzo mezzo;

	public Periodo() {
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


	public StatoMezzo getStatoMezzo() {
		return statoMezzo;
	}


	public void setStatoMezzo(StatoMezzo statoMezzo) {
		this.statoMezzo = statoMezzo;
	}


	public Mezzo getMezzo() {
		return mezzo;
	}


	public void setMezzo(Mezzo mezzo) {
		this.mezzo = mezzo;
	}


	public Integer getIdPeriodo() {
		return idPeriodo;
	}


	@Override
	public String toString() {
		return "Periodo [idPeriodo=" + idPeriodo + ", dataInizio=" + dataInizio + ", dataFine=" + dataFine
				+ ", statoMezzo=" + statoMezzo + ", mezzo=" + mezzo + "]";
	}

}
