package com.example.PrenotazioniGestione.servizi;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.PrenotazioniGestione.modules.Edificio;
import com.example.PrenotazioniGestione.modules.Postazione;
import com.example.PrenotazioniGestione.modules.Prenotazione;
import com.example.PrenotazioniGestione.modules.TipoPostazione;
import com.example.PrenotazioniGestione.modules.Utente;
import com.example.PrenotazioniGestione.repositories.EdificioRepo;
import com.example.PrenotazioniGestione.repositories.PostationRepo;
import com.example.PrenotazioniGestione.repositories.PrenotationRepo;
import com.example.PrenotazioniGestione.repositories.UtenteRepo;

@Service
public class PrenotationService {

	@Autowired PostationRepo repo;
	@Autowired EdificioRepo repoEd;
	@Autowired UtenteRepo repoU;
	@Autowired PrenotationRepo repoPrePre;
	
	
	//   PRENOTAZIONE   //
	
	public void salvaOupdatePostazione(Postazione p) {
		repo.save(p);
		System.out.println("Postazione Salvata!");
	}
	
	public void eliminaPostazione(Long i) {
		repo.deleteById(i);
		System.out.println("Postazione Eliminata!");
	}
	
	public Postazione getPostazioneById(Long i) {
		return repo.findById(i).get();
	}
	
	public List<Postazione> getAllPostazioni(){
		return (List<Postazione>) repo.findAll();
	}
	
	//

	
	public List<Postazione> getByCity(String citta) {
		List<Edificio> ed = repoEd.findByCitta(citta);
		List<Postazione> posts = new ArrayList<Postazione>();
		
		getAllPostazioni().forEach(e ->{ 
			for(int i = 0; i < ed.size(); i++) {
				if(e.getEd().getIdEdificio().equals(ed.get(i).getIdEdificio())){
					posts.add(e);
				}
			}
		}); 
		return posts;
	}
	//
	
	public List<Postazione> getByTipo(TipoPostazione tipo){
		return repo.findByTipo(tipo);
	}

	
	//    EDIFICIO    //
	
	public void salvaOupdateEdificio(Edificio p) {
		repoEd.save(p);
		System.out.println("Edificio Salvato!");
	}
	
	public void eliminaEdificio(Long i) {
		repoEd.deleteById(i);
		System.out.println("Edificio Eliminato!");
	}
	
	public Edificio getEdificioById(Long i) {
		return repoEd.findById(i).get();
	}
	
	public List<Edificio> getAllEdifici(){
		return (List<Edificio>) repoEd.findAll();
	}
	
	//   UTENTE   //
	
	public void salvaOupdateUtente(Utente p) {
		repoU.save(p);
		System.out.println("Utente Salvato!");
	}
	
	public void eliminaUtente(Long i) {
		repoU.deleteById(i);
		System.out.println("Utente Eliminato!");
	}
	
	public Utente getUtenteById(Long i) {
		return repoU.findById(i).get();
	}
	
	public List<Utente> getAllUtenti(){
		return (List<Utente>) repoU.findAll();
	}
	
	//   PRENOTAZIONE   //
	
	public void salvaOupdatePrenotazione(Prenotazione p) {
		List<Prenotazione> notation = getAllPrenotations();
			if(notation.size() > 0) {
			for(int i = 0; i < notation.size();) {
				if(notation.get(i).getPostazione().getIdPostazione().equals(p.getPostazione().getIdPostazione())) {
					if(notation.get(i).getData().equals(p.getData())) {
						System.out.println("Impossibile prenotare postazione, perché occupata per la data selezionata...");
					} else {
						repoPrePre.save(p);
						System.out.println("Prenotazione Salvata!");
					}
					break;
				} else if(notation.get(i).getUtente().getIdUtente().equals(p.getUtente().getIdUtente())) {
					if(notation.get(i).getData().equals(p.getData())) {
						System.out.println("Impossibile prenotare postazione, perché possiedi già una prenotazione in questa data...");
					} else {
						repoPrePre.save(p);
						System.out.println("Prenotazione Salvata!");
					}
					break;
				} else {
					repoPrePre.save(p);
					System.out.println("Prenotazione Salvata!");
				}
				break;
			}
		}  else {
			repoPrePre.save(p);
			System.out.println("Prenotazione Salvata!");
		}
			
	}
	
	public void eliminaPrenotazione(Long i) {
		repoPrePre.deleteById(i);
		System.out.println("Prenotazione Eliminata!");
	}
	
	public Prenotazione getPrenoById(Long i) {
		return repoPrePre.findById(i).get();
	}
	
	public List<Prenotazione> getAllPrenotations(){
		return (List<Prenotazione>) repoPrePre.findAll();
	}
	
}
