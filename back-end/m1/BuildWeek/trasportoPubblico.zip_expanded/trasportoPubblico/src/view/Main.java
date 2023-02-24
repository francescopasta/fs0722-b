package view;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;
import javax.persistence.EntityManager;

import DAO.MezzoDAO;
import DAO.PeriodoDAO;
import DAO.PuntoEmissioneDAO;
import DAO.TesseraDAO;
import DAO.TitoloDiViaggioDAO;
import DAO.TrattaDAO;
import DAO.UtenteDAO;
import DAO.ViaggioDAO;
import model.Abbonamento;
import model.Autobus;
import model.Biglietto;
import model.DistributoreAutomatico;
import model.Mezzo;
import model.Periodo;
import model.PuntoEmissione;
import model.RivenditoreAutorizzato;
import model.Tessera;
import model.TitoloDiViaggio;
import model.Tram;
import model.Tratta;
import model.Utente;
import model.Viaggio;
import utils.Durata;
import utils.JpaUtil;
import utils.Stato;
import utils.StatoMezzo;

public class Main {
	public static PuntoEmissioneDAO puntoEmissioneDAO = new PuntoEmissioneDAO();
	public static TesseraDAO tesseraDAO = new TesseraDAO();
	public static UtenteDAO utenteDAO = new UtenteDAO();
	public static TitoloDiViaggioDAO titoloDiViaggioDAO = new TitoloDiViaggioDAO();
	public static ViaggioDAO viaggioDAO = new ViaggioDAO();
	public static MezzoDAO mezzoDAO = new MezzoDAO();
	public static TrattaDAO trattaDAO = new TrattaDAO();
	public static PeriodoDAO periodoDAO = new PeriodoDAO();

	public static void totaleTitoliDiViaggioDate(LocalDate inizio, LocalDate fine) {

		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			Query q = em.createQuery(
					"SELECT t FROM TitoloDiViaggio t WHERE (t.dataAcquisto >= :inizio AND t.dataAcquisto <= :fine) OR (t.dataInizio >= :inizio AND t.dataInizio <= :fine)");
			q.setParameter("inizio", inizio);
			q.setParameter("fine", fine);
			List<TitoloDiViaggio> listTDV = q.getResultList();
			System.out.println(listTDV);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void totaleTitoliDiViaggioPuntoEmissione(int id) {

		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			Query q = em.createQuery("SELECT t FROM TitoloDiViaggio t WHERE t.puntoEmissione=:id");
			q.setParameter("id", puntoEmissioneDAO.getById(id));
			List<TitoloDiViaggio> listTDV = q.getResultList();
			System.out.println(listTDV);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void controllaValiditaAbbonamento(int id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			Query q = em.createQuery("SELECT t FROM TitoloDiViaggio t WHERE t.tessera=:id");
			q.setParameter("id", tesseraDAO.getById(id));
			Abbonamento tit = (Abbonamento) q.getSingleResult();
			System.out.println(tit);
			if (tit.getDataFine().isAfter(LocalDate.now())) {
				System.out.println("abbonamento valido");
			} else {
				System.out.println("abbonamento scaduto");
			}

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void ottieniPeriodiMezzo(int id) {

		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			Query q = em.createQuery("SELECT p FROM Periodo p WHERE p.mezzo= :id");
			q.setParameter("id", mezzoDAO.getById(id));
			List<Periodo> listaPeriodi = q.getResultList();
			System.out.println(listaPeriodi);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void vidimazione(int id_biglietto, int id_mezzo) {
		Biglietto biglietto = (Biglietto) titoloDiViaggioDAO.getById(id_biglietto);
		Mezzo mezzo = mezzoDAO.getById(id_mezzo);

		if (biglietto.getStato() == Stato.ATTIVO) {
			biglietto.setStato(Stato.DISATTIVO);
			biglietto.setDataVidimazione(LocalDate.now());
			biglietto.setMezzo(mezzo);
			titoloDiViaggioDAO.update(biglietto);
			System.out.println("biglietto timbrato");
		} else {
			System.out.println("biglietto gi� utilizzato");
		}

	}

	public static void totaleBigliettiVidimatiMezzo(int id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			Query q = em.createQuery("SELECT t FROM TitoloDiViaggio t WHERE t.mezzo=:id");
			q.setParameter("id", mezzoDAO.getById(id));
			List<TitoloDiViaggio> listTDV = q.getResultList();
			System.out.println(listTDV);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void totaleBigliettiVidimatiDate(LocalDate inizio, LocalDate fine) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			Query q = em.createQuery(
					"SELECT t FROM TitoloDiViaggio t WHERE t.dataVidimazione >= :inizio AND t.dataVidimazione <= :fine");
			q.setParameter("inizio", inizio);
			q.setParameter("fine", fine);
			List<TitoloDiViaggio> listTDV = q.getResultList();
			System.out.println(listTDV);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void totaleVolteTrattaPerMezzo(int id_mezzo, int id_tratta) {

		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			Query q = em.createQuery("SELECT v FROM Viaggio v WHERE v.mezzo = :mezzo AND v.tratta = :tratta");
			q.setParameter("mezzo", mezzoDAO.getById(id_mezzo));
			q.setParameter("tratta", trattaDAO.getById(id_tratta));
			List<Viaggio> listV = q.getResultList();
			System.out.println("numero di viaggi del mezzo su questa tratta: " + listV.size());

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

	public static void main(String[] args) {

		// --------------------------------------------DATI PER
		// TEST-------------------------------------------------------------------
// Per poter testare decommentare ed eseguire una sola volta tutti i comandi di "save" e "update" che sono ora commentati, poi ricommentare
// Consigliamo di fare questo prima di decommentare le varie funzioni, per avere sul database i dati con cui poter fare tutto

		DistributoreAutomatico dis1 = new DistributoreAutomatico();
		dis1.setStato(Stato.ATTIVO);
		dis1.setTitolo("Distributore Via dal Cazzo");

		RivenditoreAutorizzato riv1 = new RivenditoreAutorizzato();
		riv1.setTitolo("Tabaccheria di DamianoBolzano");
		riv1.setIndirizzo("Via quel che ti pare");

		//puntoEmissioneDAO.save(dis1);
		//puntoEmissioneDAO.save(riv1);

		Biglietto bi1 = new Biglietto();
		bi1.setDataAcquisto(LocalDate.of(2023, 02, 15));
		bi1.setStato(Stato.ATTIVO);
		bi1.setPuntoEmissione(riv1);

		Abbonamento abb1 = new Abbonamento();
		abb1.setDurata(Durata.MENSILE);
		abb1.setDataInizio(LocalDate.of(2023, 03, 01));
		abb1.setPuntoEmissione(riv1);

		Biglietto bi2 = new Biglietto();
		bi2.setDataAcquisto(LocalDate.of(2023, 02, 03));
		bi2.setStato(Stato.ATTIVO);
		if (dis1.getStato() == Stato.ATTIVO) {
			bi2.setPuntoEmissione(dis1);
			//titoloDiViaggioDAO.save(bi2);
		}

		Tessera t1 = new Tessera();
		t1.setDataInizio(LocalDate.of(2023, 01, 01));

		Utente u1 = new Utente();
		u1.setNome("Mario");
		u1.setCognome("Rossi");

		//utenteDAO.save(u1);
		//tesseraDAO.save(t1);
		//titoloDiViaggioDAO.save(bi1);
		//titoloDiViaggioDAO.save(abb1);

		Utente utTest;
		Abbonamento abbTest;
		Tessera tesTest;

		tesTest = tesseraDAO.getById(1);
		tesTest.setUtente(utenteDAO.getById(1));

		abbTest = (Abbonamento) titoloDiViaggioDAO.getById(3);
		abbTest.setTessera(tesseraDAO.getById(1));

		//tesseraDAO.update(tesTest);
		//titoloDiViaggioDAO.update(abbTest);

		Autobus a1 = new Autobus();
		a1.setStatoMezzo(StatoMezzo.SERVIZIO);
		List<TitoloDiViaggio> listTitolo = new ArrayList<>();
		listTitolo.add(titoloDiViaggioDAO.getById(1));
		listTitolo.add(titoloDiViaggioDAO.getById(2));

		//mezzoDAO.save(a1);

		Tram tr1 = new Tram();
		tr1.setStatoMezzo(StatoMezzo.SERVIZIO);

		List<TitoloDiViaggio> listTitoloTram = new ArrayList<>();
		listTitoloTram.add(titoloDiViaggioDAO.getById(3));
		listTitoloTram.add(titoloDiViaggioDAO.getById(4));

		//mezzoDAO.save(tr1);

		Periodo per1 = new Periodo();
		per1.setDataInizio(LocalDate.of(2023, 02, 01));
		per1.setDataFine(LocalDate.of(2023, 02, 10));
		per1.setStatoMezzo(StatoMezzo.SERVIZIO);
		per1.setMezzo(mezzoDAO.getById(1));

		Periodo per2 = new Periodo();
		per2.setDataInizio(LocalDate.of(2023, 02, 10));
		per2.setDataFine(LocalDate.of(2023, 02, 17));
		per2.setStatoMezzo(StatoMezzo.MANUTENZIONE);
		per2.setMezzo(mezzoDAO.getById(1));

		Periodo per3 = new Periodo();
		per3.setDataInizio(LocalDate.of(2023, 02, 17));
		per3.setStatoMezzo(StatoMezzo.SERVIZIO);
		per3.setMezzo(mezzoDAO.getById(1));

		Periodo per4 = new Periodo();
		per4.setDataInizio(LocalDate.of(2023, 01, 01));
		per4.setStatoMezzo(StatoMezzo.MANUTENZIONE);
		per4.setMezzo(mezzoDAO.getById(2));

		//periodoDAO.save(per1);
		//periodoDAO.save(per2);
		//periodoDAO.save(per3);
		//periodoDAO.save(per4);

		Tratta tratta1 = new Tratta();
		tratta1.setArrivo("Milano");
		tratta1.setPartenza("Verona");
		tratta1.setTempoMedio(LocalTime.of(2, 10));

		//trattaDAO.save(tratta1);

		Viaggio vi1 = new Viaggio();
		vi1.setDurataEffettiva(LocalTime.of(2, 0));
		vi1.setMezzo(mezzoDAO.getById(1));
		vi1.setTratta(trattaDAO.getById(1));

		Viaggio vi2 = new Viaggio();
		vi2.setDurataEffettiva(LocalTime.of(2, 0));
		vi2.setMezzo(mezzoDAO.getById(1));
		vi2.setTratta(trattaDAO.getById(1));

		//viaggioDAO.save(vi1);
		//viaggioDAO.save(vi2);

		// --------------------------------------------------- METODI PER TEST--------------------------------------------------------

		// totaleTitoliDiViaggioDate(LocalDate.of(2023, 02, 01), LocalDate.of(2023, 02,
		// 10));
		// totaleTitoliDiViaggioPuntoEmissione(2);
		// controllaValiditaAbbonamento(1);
		// ottieniPeriodiMezzo(1);
		// vidimazione(2, 2);
		// vidimazione(1, 1);
		// totaleBigliettiVidimatiMezzo(2);
		// totaleBigliettiVidimatiDate(LocalDate.of(2023, 02, 20), LocalDate.of(2023,
		// 02, 25));
		// totaleVolteTrattaPerMezzo(1, 1);

	}

}
