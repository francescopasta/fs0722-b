package model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("rivenditore")
public class RivenditoreAutorizzato extends PuntoEmissione {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String indirizzo;

	public RivenditoreAutorizzato() {
		super();
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}

	@Override
	public String toString() {
		return "RivenditoreAutorizzato [indirizzo=" + indirizzo + "idPuntoEmissione=" + getIdPuntoEmissione()
				+ ", titolo=" + getTitolo() + "]";
	}

}
