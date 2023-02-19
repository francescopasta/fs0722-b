package biblioteca;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table (name = "libri")
//@DiscriminatorValue("Libro")

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
		return "Libro [autore=" + autore + ", genere=" + genere + ", ISBN=" + codiceISBN + ", titolo=" + titolo 
			   + ", anno=" + annoPubblicazione + ", numeroPagine=" + numeroPagine + "]";
	}
	
}
