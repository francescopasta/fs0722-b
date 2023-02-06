package es_1;

import java.util.Scanner;

public class MainEs1 {

	public static int[] numbs = new int[5];
	
	public static Scanner john = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		System.out.println("Array di numeri: ");
		
		for(int i = 0; i < numbs.length; i ++) {
			numbs[i] = (int)(Math.random()*10)+1;
			System.out.println(numbs[i]);
		}
		
		int choice = 1;
		
		while(choice != 0) {
			System.out.println("Sostituisci un elemento dell'Array: ");
			System.out.print("Seleziona posizione (da 1 a 5) (0 per uscire): ");
			
			try {
				choice = Integer.parseInt(john.nextLine());
				if(choice != 0) {
				sostituisci(choice - 1);
				mostra();
				} else {
					break;
				}
			} catch(NumberFormatException a) {
				System.out.println("Errore!!! Inserire un numero");
				choice = 1;
			} catch(ArrayIndexOutOfBoundsException e) {
				System.out.println("Errore!!! Inserire un numero fra 1 e 5");
				choice = 1;
			}
			
		}
		
	}
	
	public static void mostra() {
		for(int i = 0; i < numbs.length; i ++) {
			System.out.println(numbs[i]);
		}
	}
	
	public static void sostituisci(int e){
		System.out.print("Inserire numero da sostituire: ");
		try {
			int sostituto = Integer.parseInt(john.nextLine());
			numbs[e] = sostituto;
		} catch(NumberFormatException a) {
			System.out.println("Errore!!! Inserire un numero fra 1 e 10");
			numbs[0] = 1;
		}
	}

}
