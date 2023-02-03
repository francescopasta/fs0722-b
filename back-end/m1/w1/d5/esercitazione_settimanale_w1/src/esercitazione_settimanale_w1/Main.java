package esercitazione_settimanale_w1;

import java.util.Scanner;

public class Main {
	
	static Scanner john = new Scanner(System.in);
	
	static	ArrayMultimediale uno = null;
	static	ArrayMultimediale due = null;
	static	ArrayMultimediale tre = null;
	static	ArrayMultimediale quattro = null;
	static	ArrayMultimediale cinque = null;
	static	ArrayMultimediale arr[] = {uno, due, tre, quattro, cinque}; 
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("Crea 5 oggetti: ");
		
		for (int i = 0; i < arr.length; i++) {
			System.out.println("Oggetto " + (i +1));
			System.out.print("Scegli il tipo di Media (1 = Immagine),(2 = Audio),(3 = Video): ");
			
			int select = Integer.parseInt(john.next());
			
			if(select == 1) {
				System.out.print("Titolo: ");
				String title = john.next();
				System.out.print("Luminosità iniziale dell'immagine: ");
				int lum = Integer.parseInt(john.next());
				arr[i] = new Image(title, lum);
			} else if(select == 2) {
				System.out.print("Titolo: ");
				String title = john.next();
				System.out.print("Durata iniziale dell'audio: ");
				int durata = Integer.parseInt(john.next());
				System.out.print("Volume iniziale dell'audio: ");
				int vol = Integer.parseInt(john.next());
				arr[i] = new Audio(title, durata, vol);
			} else if(select == 3) {
				System.out.print("Titolo: ");
				String title = john.next();
				System.out.print("Durata iniziale del video: ");
				int durata = Integer.parseInt(john.next());
				System.out.print("Volume iniziale del video: ");
				int vol = Integer.parseInt(john.next());
				System.out.print("Luminosità iniziale del video: ");
				int lum = Integer.parseInt(john.next());
				arr[i] = new Video(title, durata, vol, lum);
			} else {
				System.out.println("Errore - inserisci un numero fra 1 e 3");
				i --;
			}
			
		}
		
		parti();
		
}
	
	public static void parti() {
		boolean hello = true;
		Scanner beat = new Scanner(System.in);
		while(hello) {
			System.out.print("Selezionare uno degli oggetti creati per continuare (da 1 a 5), (per uscire digita 44): ");
			int seleziona = Integer.parseInt(beat.next());
			if(seleziona == 44) {
				System.out.println("Eject...");
				hello = false;
			} else if(seleziona == 1) {
				if(arr[0].getControlloImmagine() == 0) {
					arr[0].play();
				} else {
					arr[0].show();
				}
			} else if(seleziona == 2) {
				if(arr[1].getControlloImmagine() == 0) {
					arr[1].play();
				} else {
					arr[1].show();
				}
			} else if(seleziona == 3) {
				if(arr[2].getControlloImmagine() == 0) {
					arr[2].play();
				} else {
					arr[2].show();
				}
			} else if(seleziona == 4) {
				if(arr[3].getControlloImmagine() == 0) {
					arr[3].play();
				} else {
					arr[3].show();
				}
			} else if(seleziona == 5) {
				if(arr[4].getControlloImmagine() == 0) {
					arr[4].play();
				} else {
					arr[4].show();
				}
			} else {
				System.out.println("Inserire un valore fra 1 e 5.");
			}
		}
	}

}
