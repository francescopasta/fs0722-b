package compito_giorno2;

public class Rettangolo {

	int altezza1;
	int base1;
	int altezza2;
	int base2;
	
	public Rettangolo(int a, int b) {
		this.altezza1 = a;
		this.base1 = b;
	}
	
	public Rettangolo(int a, int b, int c, int d) {
		this.altezza1 = a;
		this.base1 = b;
		this.altezza2 = c;
		this.base2 = d;
	}
	
	public int calcoloArea1() {
		return this.altezza1 * this.base1;
	}
	
	public int calcoloPerimetro1() {
		return this.altezza1 + this.base1;
	}
	
	public int calcoloArea2() {
		return this.altezza2 * this.base2;
	}
	
	public int calcoloPerimetro2() {
		return this.altezza2 + this.base2;
	}
	
	public void stampaRettangolo() {
		System.out.println("Area: " + calcoloArea1());
		System.out.println("Perimetro: " + calcoloPerimetro1());
	}
	
	public void stampaDueRettangoli() {
		System.out.println("Primo Rettangolo: " + calcoloArea1() + " " + calcoloPerimetro1());
		System.out.println("Secondo Rettangolo: " + calcoloArea2() + " " + calcoloPerimetro2());
		System.out.println("Somma area dei due Rettangoli: " + (calcoloArea1() + calcoloArea2()));
		System.out.println("Somma perimetro dei due Rettangoli: " + (calcoloPerimetro1() + calcoloPerimetro2()));
	}
	
}
