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
@Table (name = "riviste")
//@DiscriminatorValue("Rivista")

public class Rivista extends ElementoBiblioteca{
	private Periodicita periodicita;

	public Periodicita getPeriodicita() {
		return periodicita;
	}

	public void setPeriodicita(Periodicita periodicita) {
		this.periodicita = periodicita;
	}

	@Override
	public String toString() {
		return "Rivista [periodicita=" + periodicita + ", ISBN=" + codiceISBN+ ", titolo=" + titolo
			   + ", anno=" + annoPubblicazione + ", numeroPagine=" + numeroPagine + "]";
	}
}
