package model;

import java.io.Serializable;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Viaggio implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idViaggio;
	private LocalTime durataEffettiva;

	@OneToOne
	@JoinColumn(name = "idmezzo")
	private Mezzo mezzo;

	@OneToOne
	@JoinColumn(name = "idtratta")
	private Tratta tratta;

	public Viaggio() {
		super();
	}


	public LocalTime getDurataEffettiva() {
		return durataEffettiva;
	}



	public void setDurataEffettiva(LocalTime durataEffettiva) {
		this.durataEffettiva = durataEffettiva;
	}



	public Mezzo getMezzo() {
		return mezzo;
	}



	public void setMezzo(Mezzo mezzo) {
		this.mezzo = mezzo;
	}



	public Tratta getTratta() {
		return tratta;
	}



	public void setTratta(Tratta tratta) {
		this.tratta = tratta;
	}



	public Integer getIdViaggio() {
		return idViaggio;
	}



	@Override
	public String toString() {
		return "Viaggio [durataEffettiva=" + durataEffettiva + ", mezzo=" + mezzo
				+ ", tratta=" + tratta + "]";
	}

}
