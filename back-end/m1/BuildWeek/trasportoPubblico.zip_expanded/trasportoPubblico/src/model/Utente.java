package model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Utente implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idUtente;
	private String nome;
	private String cognome;

	@OneToOne(mappedBy = "utente")
	private Tessera tessera;

	public Utente() {
		super();
	}
	
	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getCognome() {
		return cognome;
	}


	public void setCognome(String cognome) {
		this.cognome = cognome;
	}


	public Tessera getTessera() {
		return tessera;
	}


	public void setTessera(Tessera tessera) {
		this.tessera = tessera;
	}


	public Integer getIdUtente() {
		return idUtente;
	}


	@Override
	public String toString() {
		return "Utente [idUtente=" + idUtente + ", nome=" + nome + ", cognome=" + cognome + ", tessera=" + tessera
				+ "]";
	}

}
