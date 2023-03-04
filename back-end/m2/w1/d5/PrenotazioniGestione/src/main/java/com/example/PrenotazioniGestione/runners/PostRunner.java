package com.example.PrenotazioniGestione.runners;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.PrenotazioniGestione.modules.Edificio;
import com.example.PrenotazioniGestione.modules.Postazione;
import com.example.PrenotazioniGestione.modules.Prenotazione;
import com.example.PrenotazioniGestione.modules.TipoPostazione;
import com.example.PrenotazioniGestione.modules.Utente;
import com.example.PrenotazioniGestione.servizi.PrenotationService;

@Component
public class PostRunner implements CommandLineRunner {

	@Autowired PrenotationService servizio;
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("run..!");
		
		Edificio ed = new Edificio();
		ed.setNome("Giardini Bianchi");
		ed.setCitta("Monaco");
		ed.setIndirizzo("Funfter Strasse n.40");
		
		Utente ut = new Utente();
		ut.setUsername("BinoDino");
		ut.setEmail("dinoLino@gg.mail.com");
		ut.setFullname("Dino Bambino");
		
		Postazione pot = new Postazione();
		pot.setEd(ed);
		pot.setTipo(TipoPostazione.OPENSPACE);
		pot.setDescrizione("Un Grande Giardino con Tavoli");
		pot.setNumeroMassimoPosti(1000);
		
		Prenotazione dPre = new Prenotazione();
		dPre.setData(LocalDate.of(2023,3,4));
		dPre.setPostazione(pot);
		dPre.setUtente(ut);
		
		
		servizio.salvaOupdateEdificio(ed);
		servizio.salvaOupdatePostazione(pot);
		servizio.salvaOupdateUtente(ut);
		servizio.salvaOupdatePrenotazione(dPre);
		
		//Utente u1 = servizio.getUtenteById(1l);
		//Edificio ed1 = servizio.getEdificioById(1l);
		
		//System.out.println(u1);
		//System.out.println(ed1);
		
		//servizio.eliminaPrenotazione(3l);
		
		//System.out.println(servizio.getAllPrenotations());
		
		//System.out.println(servizio.getAllPostazioni());
		
		//System.out.println(servizio.getPostazioneById(2l));
		
		//servizio.eliminaPostazione(4l);
		
		//System.out.println(servizio.getAllPostazioni());
		
		
		//System.out.println(servizio.getAllEdifici());
		
		//System.out.println(servizio.getAllUtenti());
		
		//System.out.println(servizio.getByCity("Monaco"));
		
		//List<Postazione> post = servizio.getByCity("Genova");
		//System.out.println(post.get(0));
		
		
		//System.out.println(servizio.getByTipo(TipoPostazione.OPENSPACE));
		
		//System.out.println(servizio.getPrenoById(2l));
 	}

}
