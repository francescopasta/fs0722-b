package es_3;

public class ContoCorrente {
	String titolare;
	int nMovimenti;
	final int maxMovimenti = 50;
	double saldo;

	ContoCorrente(String titolare, double saldo) {
		this.titolare = titolare;
		this.saldo = saldo;
		nMovimenti = 0;
	}

	void preleva(double x) throws BancaException {
		if (nMovimenti < maxMovimenti)
			saldo = saldo - x;
			if(saldo < 0) {
				BancaException ecc =  new BancaException("il conto è in rosso");
				ecc.toString();
			}
		else
			saldo = saldo - x - 0.50;
			if(saldo < 0) {
			   BancaException ecc =  new BancaException("il conto è in rosso");
			   ecc.toString();
			}
		nMovimenti++;
	}

	double restituisciSaldo() {
		return saldo;
	}
}
