package model;

import java.time.LocalDate;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import utils.Stato;

@Entity
@DiscriminatorValue("biglietto")
public class Biglietto extends TitoloDiViaggio {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private LocalDate dataAcquisto;
	private LocalDate dataVidimazione;
	@Enumerated(EnumType.STRING)
	private Stato stato;

	public Biglietto() {
		super();
	}

	public LocalDate getDataAcquisto() {
		return dataAcquisto;
	}

	public void setDataAcquisto(LocalDate dataAcquisto) {
		this.dataAcquisto = dataAcquisto;
	}

	public LocalDate getDataVidimazione() {
		return dataVidimazione;
	}

	public void setDataVidimazione(LocalDate dataVidimazione) {
		this.dataVidimazione = dataVidimazione;
	}

	public Stato getStato() {
		return stato;
	}

	public void setStato(Stato stato) {
		this.stato = stato;
	}

	@Override
	public String toString() {
		return "Biglietto [idTitoloDiViaggio=" + getIdTitoloDiViaggio() + "dataAcquisto=" + dataAcquisto
				+ ", dataVidimazione=" + dataVidimazione + ", stato=" + stato + "]";
	}

}
