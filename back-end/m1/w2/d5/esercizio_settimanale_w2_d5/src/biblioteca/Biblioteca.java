package biblioteca;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Biblioteca {

	public static Logger log = LoggerFactory.getLogger(Biblioteca.class);
	public static List<ElementoBiblioteca> ele = new ArrayList<ElementoBiblioteca>();
	public static Scanner john = new Scanner(System.in);
	public static File file = new File("direttiva/librieRiviste.txt");
	
	public static void main(String[] args) throws IOException {
		for(Long i = 0l; i < 2l; i++) {
			aggiungiElemento(i+1);
		}
		log.info("This is the List: " + ele);
		
		boolean test = true;
		
		while(test) {
			log.info("Opzioni: (Rimuovere elemento tramite codice ISBN - 1:)"
					+ "(Ricerca Elemento tramite ISBN - 2:)"
					+ "(Ricerca Elemento tramite Anno di Pubblicazione - 3:)"
					+ "(Ricerca Elemento tramite Autore - 4:)"
					+ "(Salva Lista di Elementi su File Locale - 5:)"
					+ "(Leggi litsa di Elementi su File Locale - 6:)"
					+ "(0 per uscire): ");
			int risp = Integer.parseInt(john.nextLine());
			
			if(risp == 1) {
				log.info("Inserisci codice ISBN dell'elemento che desiderti Eliminare: ");
				Long ISBN = Long.parseLong(john.nextLine());
				ele = rimuovereTramiteISBN(ISBN);
			} else if(risp == 2) {
				log.info("Inserisci codice ISBN dell'elemento che desiderti Trovare: ");
				Long ISBN = Long.parseLong(john.nextLine());
				ElementoBiblioteca due = ricercaTramiteISBN(ISBN);
				log.info("Elemento " + due.getCodiceISBN() + ": " + due.getTitolo());
			} else if(risp == 3) {
				log.info("Inserisci l'anno di Pubblicazione: ");
				int response = Integer.parseInt(john.nextLine());
				log.info("Elementi pubblicati nell'anno " + 2015 + ": " + ricercaTramiteAnno(response));
			} else if(risp == 4) {
				log.info("Inserisci il nome dell'Autore: ");
				String response = john.nextLine();
				log.info("Titoli dell'autore " + response + ": " + ricercaTramiteAutore(response));
			} else if(risp == 5) {
				mettiFile();
				log.info("La lista è stata salvata in Locale :)");
			} else if(risp == 6) {
				leggiFile();
			} else if(risp == 0) {
				log.info("Uscendo...");
				test = false;
			}
		}

	}
	
	public static void aggiungiElemento(Long isbn) {
		log.info("Inserire Libro o Rivista? (Libro: 1)(Rivista: 2): ");
		int res = Integer.parseInt(john.nextLine());
				
		if(res == 1) {
			log.info("Inserire Titolo: ");
			String tit = john.nextLine();
			log.info("Inserire Anno Pubblicazione: ");
			int anno = Integer.parseInt(john.nextLine());
			log.info("Inserire Numero Pagine: ");
			int pagine = Integer.parseInt(john.nextLine());
			log.info("Inserire Autore: ");
			String autore = john.nextLine();
			log.info("Inserire Genere: ");
			String genere = john.nextLine();
			ele.add(new Libro(isbn, tit, anno, pagine, autore, genere));
		} else if(res == 2) {
			log.info("Inserire Titolo: ");
			String tit = john.nextLine();
			log.info("Inserire Anno Pubblicazione: ");
			int anno = Integer.parseInt(john.nextLine());
			log.info("Inserire Numero Pagine: ");
			int pagine = Integer.parseInt(john.nextLine());
			log.info("Inserire Periodicità (Settimanale: 1)(Mensile: 2)(Semestrale: 3): ");
			int risp = Integer.parseInt(john.nextLine());
			if(risp == 1) {
				ele.add(new Riviste(isbn, tit, anno, pagine, periodicità.SETTIMANALE));
			} else if(risp == 2) {
				ele.add(new Riviste(isbn, tit, anno, pagine, periodicità.MENSILE));
			} else if(risp == 3) {
				ele.add(new Riviste(isbn, tit, anno, pagine, periodicità.SEMESTRALE));
			}
		} 
	}
	
	public static List<ElementoBiblioteca> rimuovereTramiteISBN(Long ISBN) {
		return ele.stream().filter(e -> e.getCodiceISBN() != ISBN).collect(Collectors.toList());
	}
	
	public static ElementoBiblioteca ricercaTramiteISBN(Long ISBN) {
		List<ElementoBiblioteca> elemento = ele.stream().filter(e -> e.getCodiceISBN() == ISBN).collect(Collectors.toList());
		return elemento.get(0);
	}
	
	public static List<String> ricercaTramiteAnno(int anno) {
		List<ElementoBiblioteca> mento =  ele.stream().filter(e -> e.getAnnoPubblicazione() == anno).collect(Collectors.toList());
		
		List<String> abba = new ArrayList<String>();
		
		mento.stream().forEach(e -> abba.add(e.getTitolo()));
		
		return abba;
	}
	
	public static List<String> ricercaTramiteAutore(String auth) {
		List<ElementoBiblioteca> testi = new ArrayList<ElementoBiblioteca>();
		ele.stream().forEach( e -> {
			if(e instanceof Libro) {
				if((((Libro) e).getAutore()).equals(auth)) {
					testi.add(e);
				}
			}
		});
		List<String> arrow = new ArrayList<String>();
		
		testi.forEach(e -> arrow.add(e.getTitolo()));
		
		return arrow;
	}
	
	public static void mettiFile() throws IOException {
		FileUtils.writeLines(file, ele);
	}
	
	public static void leggiFile() throws IOException {
		log.info("Leggo il File: " + FileUtils.readLines(file, "UTF-8"));
	}
	//spero sia questo quello che si richiedeva, sinceramente non ho capito bene l'ultima richiesta, però in console ricevo esattamente
	//ciò che ho ricevuto all'inizio, ovvero la Lista degli elementi. A parer mio era la cosa migliore che si potesse ottenere da questa logica. 
	//Però magari si intendeva qualcos'altro. Ho seguito il mio istinto, se così si può chiamare.
}
