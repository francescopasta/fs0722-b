package model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import utils.Stato;

@Entity
@DiscriminatorValue("distributore")
public class DistributoreAutomatico extends PuntoEmissione {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Enumerated(EnumType.STRING)
	private Stato stato;

	public DistributoreAutomatico() {
		super();
	}

	public Stato getStato() {
		return stato;
	}

	public void setStato(Stato stato) {
		this.stato = stato;
	}

	@Override
	public String toString() {
		return "DistributoreAutomatico [stato=" + stato + "idPuntoEmissione=" + getIdPuntoEmissione()
				+ ", titolo=" + getTitolo() + "]";
	}

}
