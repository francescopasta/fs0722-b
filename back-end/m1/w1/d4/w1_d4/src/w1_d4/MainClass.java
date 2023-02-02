package w1_d4;

public class MainClass {

	public static void main(String[] args) {
		Dipendente John = new Dipendente(112, TipoDipartimento.VENDITE);
		Dipendente Jerry = new Dipendente(41, 1200, 40, TipoDipendente.IMPIEGATO, TipoDipartimento.AMMINISTRAZIONE);
		Dipendente Gary = new Dipendente(24, 2400, 50, TipoDipendente.QUADRO, TipoDipartimento.PRODUZIONE);
		John.promozioni();
		John.setImportoOrarioStraordinario(50);
		System.out.println("Il tuo stipendio è di " + calcolaPaga(John));
		System.out.println("Il tuo stipendio è di " + calcolaStipendio(Jerry));
		Gary.stampaDatiDipendente();
		Gary.promozioni();
		System.out.println("Il tuo stipendio + straordinari è di " + calcolaPaga(Gary));
		

	}

	public static double calcolaStipendio(Dipendente uomo) {
		return uomo.getStipendio();
	}
	
	public static double calcolaPaga(Dipendente uomo) {
		return uomo.getStipendio() + uomo.getImportoOrarioStraordinario();
	}
	
}
