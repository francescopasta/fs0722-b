package model;

import java.io.Serializable;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tratta implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idTratta;
	private String partenza;
	private String arrivo;
	private LocalTime tempoMedio;

	public Tratta() {
		super();
	}


	public String getPartenza() {
		return partenza;
	}


	public void setPartenza(String partenza) {
		this.partenza = partenza;
	}


	public String getArrivo() {
		return arrivo;
	}


	public void setArrivo(String arrivo) {
		this.arrivo = arrivo;
	}


	public LocalTime getTempoMedio() {
		return tempoMedio;
	}


	public void setTempoMedio(LocalTime tempoMedio) {
		this.tempoMedio = tempoMedio;
	}


	public Integer getIdTratta() {
		return idTratta;
	}


	@Override
	public String toString() {
		return "Tratta [idTratta=" + idTratta + ", partenza=" + partenza + ", arrivo=" + arrivo + ", tempoMedio="
				+ tempoMedio + "]";
	}

}
