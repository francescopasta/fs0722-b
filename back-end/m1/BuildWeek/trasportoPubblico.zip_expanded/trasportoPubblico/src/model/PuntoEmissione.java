package model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public abstract class PuntoEmissione implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idPuntoEmissione;

	@OneToMany(mappedBy = "puntoEmissione")
	private List<TitoloDiViaggio> titoloDiViaggio;

	private String titolo;

	public PuntoEmissione() {
		super();
	}

	public Integer getIdPuntoEmissione() {
		return idPuntoEmissione;
	}

	public void setIdPuntoEmissione(Integer idPuntoEmissione) {
		this.idPuntoEmissione = idPuntoEmissione;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	@Override
	public String toString() {
		return "PuntoEmissione [idPuntoEmissione=" + idPuntoEmissione + ", titolo=" + titolo + "]";
	}

}
