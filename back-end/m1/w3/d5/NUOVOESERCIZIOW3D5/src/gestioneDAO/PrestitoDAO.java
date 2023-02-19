package gestioneDAO;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import biblioteca.Prestito;


public class PrestitoDAO {
	
	static EntityManagerFactory emf = Persistence.createEntityManagerFactory("esercitazione_w3_d2");
	static EntityManager em = emf.createEntityManager();
	
	public static void save(Prestito p) {
		try {
			em.getTransaction().begin();
			em.persist(p);
			em.getTransaction().commit();
			
			System.out.println("Prestito aggiunto al DataBase.");
		} catch (Exception e) {
			System.out.println("Errore!" + e.getMessage());
		}
		
	}
	
	public static void getByTessera(int tessera) {
		em.getTransaction().begin();
		try {
			Query q = em.createNamedQuery("prestitoBytessera");
			q.setParameter("nt", tessera);
			List<Prestito> res = q.getResultList();
			
			for(Prestito l : res) {
				System.out.println(l);
			}
		} catch (Exception e) {
			System.out.println("ERRORE!" + e.getMessage());
		} finally {
			em.close();
		}
	}
	
	public static void getPrestitiScaduti() {
		em.getTransaction().begin();
		
		try {
			Query q = em.createNamedQuery("prestitoBytessera");
			
			List<Prestito> res = q.getResultList();
			
			for(Prestito l : res) {
				System.out.println(l);
			}
		} catch (Exception e) {
			System.out.println("ERRORE nella rimozione!");
		} finally {
			em.close();
		}
	}
}
