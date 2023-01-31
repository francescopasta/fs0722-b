package compito_giorno2;

public class ClassMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	
		//
		Rettangolo rett = new Rettangolo(15, 6);
		Rettangolo retts = new Rettangolo(15, 6, 7, 20);
		rett.stampaRettangolo();
		retts.stampaDueRettangoli();
		//
		
		//
		SIM numb = new SIM(333456789);
		numb.addCredito();
		numb.addCredito();
		numb.addCredito();
		numb.chiama("Lorence", 30);
		numb.chiama("Harry", 120);
		numb.ritornaDati();
		//
		Cliente client = new Cliente(1, "Andrea Coppola", "andrea@gmail.com", "1/12/24");
		Articolo art = new Articolo(20, "Bruce", 11, 2);
		Articolo art2 = new Articolo(20, "Bruce", 11, 2);
		
		Articolo array[] =  {art, art2}; 
		
		Carrelo carr = new Carrelo(client, array);
		System.out.println("Totale costi degli articoli" + carr.totaleCostoArticoli);
		//
		
		
	}

}
