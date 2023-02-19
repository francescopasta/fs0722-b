package gestioneDAO;

import biblioteca.Utente;
import utils.JpaUtils;

public class UtenteDAO {

	public static void save(Utente u) {
		try {
			JpaUtils.t.begin();
			JpaUtils.em.persist(u);
			JpaUtils.t.commit();
			
			System.out.println("Utente aggiunto al DataBase.");
		} catch (Exception e) {
			System.out.println("Errore! " + e.getMessage());
		}
	}
}
