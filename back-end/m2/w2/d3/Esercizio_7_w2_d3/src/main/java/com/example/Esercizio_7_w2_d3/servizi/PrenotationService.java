package com.example.Esercizio_7_w2_d3.servizi;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Esercizio_7_w2_d3.modules.Edificio;
import com.example.Esercizio_7_w2_d3.modules.Postazione;
import com.example.Esercizio_7_w2_d3.modules.Prenotazione;
import com.example.Esercizio_7_w2_d3.modules.TipoPostazione;
import com.example.Esercizio_7_w2_d3.modules.Utente;
import com.example.Esercizio_7_w2_d3.repositories.EdificioRepo;
import com.example.Esercizio_7_w2_d3.repositories.PostationRepo;
import com.example.Esercizio_7_w2_d3.repositories.PrenotationRepo;
import com.example.Esercizio_7_w2_d3.repositories.UtenteRepo;

import jakarta.persistence.EntityExistsException;

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
	
	public Prenotazione salvaPrenotazione(Prenotazione p, Long idPost, Long idUt) {
		
		p.setPostazione(getPostazioneById(idPost));
		p.setUtente(getUtenteById(idUt));
		
		if(repoPrePre.existsByPostazione(p.getPostazione())) {
			if(repoPrePre.existsByData(p.getData())) {
				throw new EntityExistsException("La postazione è già occupata per questo giorno!!");
			} else {
				repoPrePre.save(p);
			}
		} else if(repoPrePre.existsByUtente(p.getUtente())) {
			if(repoPrePre.existsByData(p.getData())) {
				throw new EntityExistsException("Esiste già una prenotazione in questa data!!");
			} else {
				repoPrePre.save(p);
			}
		} else {
			repoPrePre.save(p);
		}
		return p;
	}
	
	public Prenotazione updatePrenotazione(Prenotazione p) {
		
		if(!repoPrePre.existsById(p.getIdPrenotazione())) {
			throw new EntityExistsException("Prenotation doesn't exist!!");  
		} else {
			if(repoPrePre.existsByPostazione(p.getPostazione())) {
				if(repoPrePre.existsByData(p.getData())) {
					throw new EntityExistsException("La postazione è già occupata per questo giorno!!");
				} else {
					repoPrePre.save(p);
				}
			} else if(repoPrePre.existsByUtente(p.getUtente())) {
				if(repoPrePre.existsByData(p.getData())) {
					throw new EntityExistsException("Esiste già una prenotazione in questa data!!");
				} else {
					repoPrePre.save(p);
				}
			} else {
				repoPrePre.save(p);
			}
		}
		return p;
	}
	
	public String eliminaPrenotazione(Long i) {
		if(!repoPrePre.existsById(i)) {
			throw new EntityExistsException("Prenotation doesn't exist!!");  
		}
		repoPrePre.deleteById(i);
		return "Prenotazione Eliminata!!!";
	}
	
	public Prenotazione getPrenoById(Long i) {
		if(!repoPrePre.existsById(i)) {
			throw new EntityExistsException("User doesn't exist!!");  
		}
		return repoPrePre.findById(i).get();
	}
	
	public List<Prenotazione> getAllPrenotations(){
		return (List<Prenotazione>) repoPrePre.findAll();
	}
	
}
