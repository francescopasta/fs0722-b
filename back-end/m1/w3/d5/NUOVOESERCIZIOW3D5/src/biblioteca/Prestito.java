package biblioteca;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "prestiti")

@NamedQuery (name = "prestitoBytessera", query = "SELECT p FROM Prestito p where p.utente.numeroTessera = :nt")
@NamedQuery (name = "prestitiScaduti", query = "SELECT p FROM Prestito p WHERE (dataRestituzionePrev > CURRENT DATE AND dataRestituzioneEff IS NULL)")
public class Prestito {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne 
	private Utente utente;
	
	@ManyToOne
	private ElementoBiblioteca elementoPrestato;
	
	private LocalDate dataInizioPrestito;
	
	private LocalDate dataRestituzionePrev;
	
	private LocalDate dataRestituzioneEff;

	public LocalDate getDataInizioPrestito() {
		return dataInizioPrestito;
	}

	public void setDataInizioPrestito(LocalDate dataInizioPrestito) {
		this.dataInizioPrestito = dataInizioPrestito;
	}

	public LocalDate getDataRestituzionePrev() {
		return dataRestituzionePrev;
	}

	public void setDataRestituzionePrev(LocalDate dataRestituzionePrev) {
		this.dataRestituzionePrev = dataRestituzionePrev;
	}

	public LocalDate getDataRestituzioneEff() {
		return dataRestituzioneEff;
	}

	public void setDataRestituzioneEff(LocalDate dataRestituzioneEff) {
		this.dataRestituzioneEff = dataRestituzioneEff;
	}

	public int getId() {
		return id;
	}

	public Utente getUtente() {
		return utente;
	}

	public ElementoBiblioteca getElementoPrestato() {
		return elementoPrestato;
	}
	
}
