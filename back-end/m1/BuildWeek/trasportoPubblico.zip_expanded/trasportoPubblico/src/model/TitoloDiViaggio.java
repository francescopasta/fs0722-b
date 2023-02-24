package model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public abstract class TitoloDiViaggio implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idTitoloDiViaggio;

	@ManyToOne
	@JoinColumn(name = "idmezzo")
	private Mezzo mezzo;

	@ManyToOne
	@JoinColumn(name = "idpuntoemissione")
	private PuntoEmissione puntoEmissione;

	public TitoloDiViaggio() {
		super();
	}

	

	public Mezzo getMezzo() {
		return mezzo;
	}



	public void setMezzo(Mezzo mezzo) {
		this.mezzo = mezzo;
	}



	public PuntoEmissione getPuntoEmissione() {
		return puntoEmissione;
	}



	public void setPuntoEmissione(PuntoEmissione puntoEmissione) {
		this.puntoEmissione = puntoEmissione;
	}



	public Integer getIdTitoloDiViaggio() {
		return idTitoloDiViaggio;
	}



	@Override
	public String toString() {
		return "TitoloDiViaggio [idTitoloDiViaggio=" + idTitoloDiViaggio + "]";
	}

}
