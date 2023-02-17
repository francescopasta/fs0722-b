package biblioteca;

import javax.persistence.Entity;

@Entity
public class Libro extends ElementoBiblioteca{
	
	private String autore;
	private String genere;
	
	public Libro() {
	}
	
	public String getAutore() {
		return autore;
	}



	public void setAutore(String autore) {
		this.autore = autore;
	}



	public String getGenere() {
		return genere;
	}



	public void setGenere(String genere) {
		this.genere = genere;
	}

	@Override
	public String toString() {
		return "Libro [autore=" + autore + ", genere=" + genere + ", codiceISBN=" + getCodiceISBN() + ", titolo=" + getTitolo()
				+ ", annoPubblicazione=" + getAnnoPubblicazione() + ", numeroPagine=" + getNumeroPagine() + "]";
	}

}
