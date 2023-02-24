package model;

import java.time.LocalDate;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import utils.Durata;

@Entity
@DiscriminatorValue("abbonamento")
public class Abbonamento extends TitoloDiViaggio {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Enumerated(EnumType.STRING)
	private Durata durata;
	private LocalDate dataInizio;
	private LocalDate dataFine;

	@OneToOne
	@JoinColumn(name = "idtessera")
	private Tessera tessera;

	public Abbonamento() {
		super();
	}

	public Durata getDurata() {
		return durata;
	}

	public void setDurata(Durata durata) {
		this.durata = durata;
	}

	public LocalDate getDataInizio() {
		return dataInizio;
	}

	public void setDataInizio(LocalDate dataInizio) {
		this.dataInizio = dataInizio;
		if (this.durata == Durata.SETTIMANALE) {
			this.dataFine = dataInizio.plusDays(7);

		} else if (this.durata == Durata.MENSILE) {
			this.dataFine = dataInizio.plusDays(30);
		}
	}

	public LocalDate getDataFine() {
		return dataFine;
	}

	public void setDataFine(LocalDate dataFine) {
		this.dataFine = dataFine;
	}

	public Tessera getTessera() {
		return tessera;
	}

	public void setTessera(Tessera tessera) {
		this.tessera = tessera;
	}

	@Override
	public String toString() {
		return "Abbonamento [idTitoloDiViaggio=" + getIdTitoloDiViaggio() + "durata=" + durata + ", dataInizio="
				+ dataInizio + ", dataFine=" + dataFine + "]";
	}

}
