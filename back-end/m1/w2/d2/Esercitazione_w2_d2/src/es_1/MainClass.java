package es_1;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class MainClass {

	public static Logger log = LoggerFactory.getLogger(MainClass.class);
	public static Scanner john = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		log.info("Inserire il numero di parole da aggiungere: ");
		int n = Integer.parseInt(john.nextLine());
		Set(n);

	}
	
	public static void Set(int n) {
		Set<String> s = new HashSet<String>();
		
		int duplicati = 0;
		
		for(int i = 0; i < n; i ++) {
			log.info("Inserisci parola per posizione: " + i);
			String e = john.nextLine();
			if(s.contains(e)) {
				duplicati ++;
			} else {
				s.add(e);
			}
		}
		
		log.info("Parole ripetute: " + duplicati);
		log.info("Parole distinte: " + s.size());
		log.info("Lista delle parola inserite: " + s);
		
	}
	
	/*if(!s.contains(e)) {
		
	} else {
		log.error("Non puoi inserire Duplicati, riprova.");
		i--;
	}*/
}
