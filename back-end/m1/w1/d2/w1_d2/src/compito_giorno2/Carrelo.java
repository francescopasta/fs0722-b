package compito_giorno2;

public class Carrelo {
	
	Cliente clienteAssociato;
	Articolo elencoArticoli[];
	double totaleCostoArticoli = 0;
	
	
	public Carrelo(Cliente a, Articolo b[]) {
		this.clienteAssociato = a;
		this.elencoArticoli = b;
		for(int i = 0; i < b.length; i ++) {
		   this.totaleCostoArticoli += b[i].prezzo;
		}
	}
	
}
