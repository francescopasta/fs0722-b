package compito_giorno2;

public class SIM {

	int numero;
	int credito = 0;
	String[] calls;
	int chiamata = 0;
	
	public SIM(int a) {
		this.numero = a;
		this.calls = new String[5];
	}
	
	public void addCredito() {
		this.credito ++;
	}
	
	public void chiama(String nome, int minuti) {
		this.chiamata ++;
		String[] chiamate = new String[5];
		for(int i = this.chiamata; i < (this.chiamata+1); i++) {
			chiamate[i] = nome + " - " + String.valueOf(minuti);
		}
		this.calls = chiamate;
	}
	
	public void ritornaDati() {
		System.out.println("Il tuo numero: " + this.numero);
		System.out.println("Il tuo credito: " + this.credito);
		System.out.println("Last calls: ");
		System.out.println("- " + this.calls[1]);
		System.out.println("- " + this.calls[2]);
		System.out.println("- " + this.calls[3]);
	}
	
}
