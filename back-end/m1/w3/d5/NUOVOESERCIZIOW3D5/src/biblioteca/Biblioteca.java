package biblioteca;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import utils.JpaUtils;

public class Biblioteca {

	public static Logger log = LoggerFactory.getLogger(Biblioteca.class);
	public static Scanner john = new Scanner(System.in);
	static EntityManagerFactory emf = Persistence.createEntityManagerFactory("esercitazione_w3_d2");
	static EntityManager em = emf.createEntityManager();
	
	public static void main(String[] args) throws IOException {
		for(Long i = 0l; i < 1l; i++) {
			aggiungiElemento(i+1);
		}
		
		boolean test = true;
		
		while(test) {
			log.info("Opzioni: (Rimuovere elemento tramite codice ISBN - 1:)"
					+ "(Ricerca Elemento tramite ISBN - 2:)"
					+ "(Ricerca Elemento tramite Anno di Pubblicazione - 3:)"
					+ "(Ricerca Elemento tramite Autore - 4:)"
					+ "(Ricerca Elemento tramite Titolo - 5:)"
					+ "(0 per uscire): ");
			try {
				int risp = Integer.parseInt(john.nextLine());
			
				if(risp == 1) {
					log.info("Inserisci codice ISBN dell'elemento che desiderti Eliminare: ");
					Long ISBN = Long.parseLong(john.nextLine());
					rimuovereTramiteISBN(String.valueOf(ISBN));
				} else if(risp == 2) {
					log.info("Inserisci codice ISBN dell'elemento che desiderti Trovare: ");
					Long ISBN = Long.parseLong(john.nextLine());
					ricercaTramiteISBN(String.valueOf(ISBN));
				} else if(risp == 3) {
					log.info("Inserisci l'anno di Pubblicazione: ");
					int response = Integer.parseInt(john.nextLine());
					ricercaTramiteAnno(response);
				} else if(risp == 4) {
					log.info("Inserisci il nome dell'Autore: ");
					String response = john.nextLine();
					ricercaTramiteAutore(response);
				} else if(risp == 5) {
					log.info("Inserisci il titolo dell'Opera: ");
					String response = john.nextLine();
					ricercaTramiteAutore(response);
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
				}
				
			} else if(res == 2) {
				
				Rivista reve = new Rivista();
				
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
					reve.setPeriodicita(Periodicita.SETTIMANALE);
				} else if(risp == 2) {
					reve.setPeriodicita(Periodicita.MENSILE);
				} else if(risp == 3) {
					reve.setPeriodicita(Periodicita.SEMESTRALE);
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
	
	public static void rimuovereTramiteISBN(String isbn) {
		em.getTransaction().begin();
        try {
            Query q = em.createNamedQuery("removeByIsbn");
            q.setParameter("n", isbn);
            q.executeUpdate();
            em.getTransaction();
            em.getTransaction().commit();
        } catch (Exception e) {
            System.out.println("ERRORE!" + e.getMessage());
		} finally {
			em.close();
		}
	}
	
	public static void ricercaTramiteISBN(String isbn) {
		em.getTransaction().begin();
		try {
			Query q = em.createNamedQuery("getByIsbn");
			q.setParameter("n", isbn);
			
			List<ElementoBiblioteca> res = q.getResultList();
			
			for(ElementoBiblioteca l : res) {
				System.out.println(l);
			}
		} catch (Exception e) {
			System.out.println("ERRORE!" + e.getMessage());
		} finally {
			em.close();
		}
	}
	
	public static void ricercaTramiteAnno(int anno) {
		em.getTransaction().begin();
		try {
			Query q = em.createNamedQuery("getByAnno");
			q.setParameter("n", anno);
			
			List<ElementoBiblioteca> res = q.getResultList();
			
			for(ElementoBiblioteca l : res) {
				System.out.println(l);
			}
		} catch (Exception e) {
			System.out.println("ERRORE nella ricerca!");
		} finally {
			em.close();
		}
	}
	
	public static void ricercaTramiteAutore(String autore) {
		em.getTransaction().begin();
		try {
			Query q = em.createNamedQuery("getByAutore");
			q.setParameter("a", autore);
			
			List<Libro> res = q.getResultList();
			
			for(Libro l : res) {
				System.out.println(l);
			}
		} catch (Exception e) {
			System.out.println("ERRORE!" + e.getMessage());
		} finally {
			em.close();
		}
	}
	
	public static void ricercaTramiteTitolo(String titolo) {
		em.getTransaction().begin();
		try {
			Query q = em.createNamedQuery("getByTitolo");
			q.setParameter("a", "%" + titolo + "%");
			
			List<ElementoBiblioteca> res = q.getResultList();
			
			for(ElementoBiblioteca l : res) {
				System.out.println(l);
			}
		} catch (Exception e) {
			System.out.println("ERRORE nella ricerca!");
		} finally {
			em.close();
		}
	}
	
}
