package model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import utils.StatoMezzo;

@Entity
public abstract class Mezzo implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idMezzo;
	@Enumerated(EnumType.STRING)
	private StatoMezzo statoMezzo;

	@OneToMany(mappedBy = "mezzo")
	private List<TitoloDiViaggio> titoloDiViaggio;

	@OneToMany(mappedBy = "mezzo")
	private List<Periodo> periodo;

	public Mezzo() {
		super();
	}

	public Integer getIdMezzo() {
		return idMezzo;
	}


	public StatoMezzo getStatoMezzo() {
		return statoMezzo;
	}

	public void setStatoMezzo(StatoMezzo statoMezzo) {
		this.statoMezzo = statoMezzo;
	}

	public List<TitoloDiViaggio> getTitoloDiViaggio() {
		return titoloDiViaggio;
	}

	public void setTitoloDiViaggio(List<TitoloDiViaggio> titoloDiViaggio) {
		this.titoloDiViaggio = titoloDiViaggio;
	}

	public List<Periodo> getPeriodo() {
		return periodo;
	}

	public void setPeriodo(List<Periodo> periodo) {
		this.periodo = periodo;
	}

	@Override
	public String toString() {
		return "Mezzo [idMezzo=" + idMezzo + ", statoMezzo=" + statoMezzo
				+ ", titoloDiViaggio=" + titoloDiViaggio + ", periodo=" + periodo + "]";
	}

}
