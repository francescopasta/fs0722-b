package biblioteca;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ElementoBiblioteca")
public abstract class ElementoBiblioteca {
	
	@Id
	@Column(name = "codiceISBN")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long codiceISBN;
	@Column(name = "titolo")
	private String titolo;
	@Column(name = "annoPubblicazione")
	private int annoPubblicazione;
	@Column(name = "numeroPagine")
	private int numeroPagine;
	
	public ElementoBiblioteca() {
	}

	public Long getCodiceISBN() {
		return codiceISBN;
	}

	public void setCodiceISBN(Long codiceISBN) {
		this.codiceISBN = codiceISBN;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public int getAnnoPubblicazione() {
		return annoPubblicazione;
	}

	public void setAnnoPubblicazione(int annoPubblicazione) {
		this.annoPubblicazione = annoPubblicazione;
	}

	public int getNumeroPagine() {
		return numeroPagine;
	}

	public void setNumeroPagine(int numeroPagine) {
		this.numeroPagine = numeroPagine;
	}
	
}
