package w1_d4;

public class Dipendente {
	
	private double stipendioBase = 1000;
	private int matricola;
	private double stipendio;
	private int importoOrarioStraordinario;
	private TipoDipendente livello;
	private TipoDipartimento dipartimento;
	
	public Dipendente(int matricola, TipoDipartimento dipartimento) {
		this.matricola = matricola;
		this.dipartimento = dipartimento;
		this.stipendio = this.stipendioBase;
		this.importoOrarioStraordinario = 30;
		this.livello = TipoDipendente.OPERAIO;
		
	}
	
	public Dipendente(int matricola, double stipendio, int importoOrarioStraordinario, TipoDipendente livello, TipoDipartimento dipartimento) {
		this.matricola = matricola;
		this.stipendio = stipendio;
		this.importoOrarioStraordinario = importoOrarioStraordinario; 
		this.livello = livello;
		this.dipartimento = dipartimento; 
	}

	public double getImportoOrarioStraordinario() {
		return importoOrarioStraordinario;
	}

	public void setImportoOrarioStraordinario(int importoOrarioStraordinario) {
		this.importoOrarioStraordinario = importoOrarioStraordinario;
	}

	public TipoDipartimento getDipartimento() {
		return dipartimento;
	}

	public void setDipartimento(TipoDipartimento dipartimento) {
		this.dipartimento = dipartimento;
	}

	public double getStipendioBase() {
		return stipendioBase;
	}

	public int getMatricola() {
		return matricola;
	}

	public double getStipendio() {
		return stipendio;
	}

	public TipoDipendente getLivello() {
		return livello;
	}
	
	public void stampaDatiDipendente() {
		System.out.println("Dati del Dipendente: ");
		System.out.println("Matricola:" + getMatricola());
		System.out.println("Stipendio:" + getStipendio());
		System.out.println("Straordinario:" + getImportoOrarioStraordinario());
		System.out.println("Livello:" + getLivello());
		System.out.println("Dipartimento:" + getDipartimento());
	}
	
	public TipoDipendente promozioni() {
		if(this.livello == TipoDipendente.OPERAIO) {
			this.livello = TipoDipendente.IMPIEGATO;
			this.stipendio = this.stipendioBase * 1.2;
		} else if(this.livello == TipoDipendente.IMPIEGATO) {
			this.livello = TipoDipendente.QUADRO;
			this.stipendio = this.stipendioBase * 1.5;
		} else if(this.livello == TipoDipendente.QUADRO) {
			this.livello = TipoDipendente.DIRIGENTE;
			this.stipendio = this.stipendioBase * 2;
		} else {
			System.out.println("Sorry there's been an error");
		}
		System.out.println("Il tuo stipendio è salitop a " + this.stipendio);
		return this.livello;
	}
}
