package it.epicode.be;

import java.util.Scanner;

public class Helloworld {

	public static void main (String[] args) {
			// Stampa a console  la frase
			System.out.println("This is my first Epicode Java Project!");
			//esercizio2();
			//esercizio3();
			esercizio4();
	}
	
	public static void esercizio2() {
			int moltiplicazione = moltiply(20, 15);
			System.out.println("moltiplicando 20 e 15 otteniamo " + moltiplicazione);
			
			try (Scanner sc = new Scanner(System.in)) {
				System.out.print("Scrivi un pensiero: ");
				String stringa = sc.nextLine();	
				System.out.print("Dai un voto numerico al tuo pensiero: ");
				int numero = sc.nextInt();
				System.out.println(concatena(stringa, numero));
			}
			
			String[] array = {"Luna", "Sole", "Marte", "Saturno", "Giove"};
			String b = "Plutone";
			System.out.println(inseriscilnArray(array, b));
			
	}
	
	public static int moltiply(int a, int b) {
			int c = a*b;
			return c;
	}
	public static String concatena(String str, int a){
		String numero = String.valueOf(a);
		return str + " - " + numero;
	}
	public static String  inseriscilnArray(String[] a, String b){
		String[]arr = new String [6];
		arr[0] = a[0];
		arr[1] = a[1];
		arr[2] = b;
		arr[3] = a[2];
		arr[4] = a[3];
		arr[5] = a[4];
		return arr[2];
	}
	
	
	public static void esercizio3() {
		try (Scanner md = new Scanner(System.in)) {
			System.out.print("Scrivi un pensiero 2: ");
			String str = md.next();
			System.out.print("Scrivi un pensiero 2 di nuovo: ");
			String str2 = md.next();
			System.out.print("Scrivi un pensiero 2 ancora uno: ");
			String str3 = md.next();
			concatenaStringhe(str, str2, str3);
			concatenaStringheInvertite(str, str2, str3);
		}
	}
	
	public static void concatenaStringhe(String a, String b, String c){
		System.out.println(a + " " + b + " " + c);
	}
	public static void concatenaStringheInvertite(String a, String b, String c){
		System.out.println(c + " " + b + " " + a);
	}
	
	
	public static void esercizio4() {
		try (Scanner rett = new Scanner(System.in)) {
			System.out.print("Base del rettangolo: ");
			double a = rett.nextDouble();
			System.out.print("Altezza del rettangolo: ");
			double b = rett.nextDouble();
			System.out.println(perimetroRettangolo(a,b));
		}
		
		try (Scanner ajaaja = new Scanner(System.in)) {
			System.out.print("Inserisci un numero, sarà pari se esce 0, o dispari se esce 1: ");
			double nus = ajaaja.nextDouble();
			System.out.print(pariEdispari(nus));
		}
		
		try (Scanner base = new Scanner(System.in)) {
			System.out.print("Inserisci la base del triangolo cui vuoi calcolare l'area: ");
			double b = base.nextDouble();
			System.out.print("Ore l'altezza: ");
			double h = base.nextDouble();
			System.out.print(areaTriangolo(b,h));
		}
	}
	
	public static double perimetroRettangolo(double a, double b) {
		return (a*2) + (b*2);
	}
	
	public static double pariEdispari(double numb){
		if(numb%2 == 0) {
			return 0;
		} else {
			return 1;
		}
	}
	
	public static double areaTriangolo(double base, double altezza) {
		return (base*altezza)/2;
	}
}




