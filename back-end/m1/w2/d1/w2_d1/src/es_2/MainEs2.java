package es_2;

import java.util.Scanner;

public class MainEs2 {
	
	public static Scanner john = new Scanner(System.in);

	public static void main(String[] args) {
		
		System.out.println("Calcolo di km/l: ");
		System.out.print("Inserisci numero km percorsi: ");
		int km = Integer.parseInt(john.nextLine());
		System.out.print("Inserisci numero litri di carburante consumati: ");
		int litr = Integer.parseInt(john.nextLine());
		
		try {
			System.out.println("il risultato è di " + calcoloKmLit(km,litr) + " km/l");
		} catch(NumberFormatException a) {
			System.out.println("Errore!!! Inserire un numero");
		} catch(ArithmeticException e) {
			System.out.println("Errore!!! Inserire una cifra maggiore di 0");
		}
		
	}
	
	public static int calcoloKmLit(int a, int b) {
		return a / b;
	}

}
