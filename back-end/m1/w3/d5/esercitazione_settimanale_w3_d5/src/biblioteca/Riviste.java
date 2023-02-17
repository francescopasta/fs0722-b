package biblioteca;

import javax.persistence.Entity;

@Entity
public class Riviste extends ElementoBiblioteca{
	private periodicità periodicità;

	public Riviste() {
	}
	
	public periodicità getPeriodicità() {
		return periodicità;
	}

	public void setPeriodicità(periodicità periodicità) {
		this.periodicità = periodicità;
	}

	@Override
	public String toString() {
		return "Riviste [periodicità=" + periodicità + ", codiceISBN=" + getCodiceISBN() + ", titolo=" + getTitolo()
				+ ", annoPubblicazione=" + getAnnoPubblicazione() + ", numeroPagine=" + getNumeroPagine() + "]";
	}
	
}
