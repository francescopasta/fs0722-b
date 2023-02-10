package biblioteca;

public class Riviste extends ElementoBiblioteca{
	private periodicità periodicità;

	public Riviste(Long ISBN, String titolo, int anno, int pagine, biblioteca.periodicità periodicità) {
		super(ISBN, titolo, anno, pagine);
		this.periodicità = periodicità;
	}
	
	public periodicità getPeriodicità() {
		return periodicità;
	}

	@Override
	public String toString() {
		return "Riviste [periodicità=" + periodicità + ", codiceISBN=" + getCodiceISBN() + ", titolo=" + getTitolo()
				+ ", annoPubblicazione=" + getAnnoPubblicazione() + ", numeroPagine=" + getNumeroPagine() + "]";
	}
	
}
