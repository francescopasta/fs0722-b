package biblioteca;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Biblioteca {

	public static Logger log = LoggerFactory.getLogger(Biblioteca.class);
	public static List<ElementoBiblioteca> ele = new ArrayList<ElementoBiblioteca>();
	public static Scanner john = new Scanner(System.in);
	
	public static void main(String[] args) throws IOException {
		for(Long i = 0l; i < 1l; i++) {
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
			try {
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
				} else if(risp == 0) {
					log.info("Uscendo...");
					test = false;
				}
			} catch(NumberFormatException a) {
				System.out.println("Errore!!! Inserire un numero");
			} catch(ArrayIndexOutOfBoundsException e) {
				System.out.println("Errore!!! Inserire un numero fra 1 e 2");
			}
		
		}

	}
	
	public static void aggiungiElemento(Long isbn) {
		log.info("Inserire Libro o Rivista? (Libro: 1)(Rivista: 2): ");
		try {
			int res = Integer.parseInt(john.nextLine());
			if(res == 1) {
				EntityManagerFactory emf = Persistence.createEntityManagerFactory("esercitazione_biblioteca_w3_d5");
				EntityManager em = emf.createEntityManager();
				Libro bib = new Libro();
				
				log.info("Inserire Titolo: ");
				String tit = john.nextLine();
				bib.setTitolo(tit);
				log.info("Inserire Anno Pubblicazione: ");
				int anno = Integer.parseInt(john.nextLine());
				bib.setAnnoPubblicazione(anno);
				log.info("Inserire Numero Pagine: ");
				int pagine = Integer.parseInt(john.nextLine());
				bib.setNumeroPagine(pagine);
				log.info("Inserire Autore: ");
				String autore = john.nextLine();
				bib.setAutore(autore);
				log.info("Inserire Genere: ");
				String genere = john.nextLine();
				bib.setGenere(genere);
				
				try {
					em.getTransaction().begin();
					em.persist(bib);
					em.getTransaction().commit();
				} catch(Exception e) {
					em.getTransaction().rollback();
					log.error(e.getMessage());
				} finally {
					em.close();
				}
				
			} else if(res == 2) {
				EntityManagerFactory emf = Persistence.createEntityManagerFactory("esercitazione_biblioteca_w3_d5");
				EntityManager em = emf.createEntityManager();
				
				Riviste reve = new Riviste();
				
				log.info("Inserire Titolo: ");
				String tit = john.nextLine();
				reve.setTitolo(tit);
				log.info("Inserire Anno Pubblicazione: ");
				int anno = Integer.parseInt(john.nextLine());
				reve.setAnnoPubblicazione(anno);
				log.info("Inserire Numero Pagine: ");
				int pagine = Integer.parseInt(john.nextLine());
				reve.setNumeroPagine(pagine);
				log.info("Inserire Periodicità (Settimanale: 1)(Mensile: 2)(Semestrale: 3): ");
				int risp = Integer.parseInt(john.nextLine());
				
				if(risp == 1) {
					reve.setPeriodicità(periodicità.SETTIMANALE);
				} else if(risp == 2) {
					reve.setPeriodicità(periodicità.MENSILE);
				} else if(risp == 3) {
					reve.setPeriodicità(periodicità.SEMESTRALE);
				}
				
				try {
					em.getTransaction().begin();
					em.persist(reve);
					em.getTransaction().commit();
				} catch(Exception e) {
					em.getTransaction().rollback();
					log.error(e.getMessage());
				} finally {
					em.close();
				}
				
			} 
		} catch(NumberFormatException a) {
			System.out.println("Errore!!! Inserire un numero");
		} catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("Errore!!! Inserire un numero fra 1 e 2");
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
	//spero sia questo quello che si richiedeva, sinceramente non ho capito bene l'ultima richiesta, però in console ricevo esattamente
	//ciò che ho ricevuto all'inizio, ovvero la Lista degli elementi. A parer mio era la cosa migliore che si potesse ottenere da questa logica. 
	//Però magari si intendeva qualcos'altro. Ho seguito il mio istinto, se così si può chiamare.
}
