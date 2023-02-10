package biblioteca;

public class Libro extends ElementoBiblioteca{
	private String autore;
	private String genere;
	
	public Libro(Long ISBN, String titolo, int annoPubb, int pagine, String autore, String genere) {
		super(ISBN, titolo, annoPubb, pagine);
		this.autore = autore;
		this.genere = genere;
	}
	
	public String getAutore() {
		return autore;
	}
	public String getGenere() {
		return genere;
	}

	@Override
	public String toString() {
		return "Libro [autore=" + autore + ", genere=" + genere + ", codiceISBN=" + getCodiceISBN() + ", titolo=" + getTitolo()
				+ ", annoPubblicazione=" + getAnnoPubblicazione() + ", numeroPagine=" + getNumeroPagine() + "]";
	}

}
