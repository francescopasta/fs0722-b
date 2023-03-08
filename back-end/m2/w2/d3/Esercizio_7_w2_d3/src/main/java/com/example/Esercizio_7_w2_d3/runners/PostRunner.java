package com.example.Esercizio_7_w2_d3.runners;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.Esercizio_7_w2_d3.modules.Edificio;
import com.example.Esercizio_7_w2_d3.modules.Postazione;
import com.example.Esercizio_7_w2_d3.modules.Prenotazione;
import com.example.Esercizio_7_w2_d3.modules.TipoPostazione;
import com.example.Esercizio_7_w2_d3.modules.Utente;
import com.example.Esercizio_7_w2_d3.servizi.PrenotationService;

@Component
public class PostRunner implements CommandLineRunner {

	@Autowired PrenotationService servizio;
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("run..!");
		
		/*Edificio ed = new Edificio();
		ed.setNome("Palazzo Whong");
		ed.setCitta("Japan");
		ed.setIndirizzo("kinjongunjinhg n.1");
		
		Utente ut = new Utente();
		ut.setUsername("BinoDino");
		ut.setEmail("dinoLino@gg.mail.com");
		ut.setFullname("Dino Bambino");
		
		Postazione pot = new Postazione();
		pot.setEd(ed);
		pot.setTipo(TipoPostazione.OPENSPACE);
		pot.setDescrizione("Hello, Goodbye");
		pot.setNumeroMassimoPosti(10);*/
		
		/*Prenotazione dPre = new Prenotazione();
		dPre.setData(LocalDate.of(2023,3,4));*/
		
		
		//servizio.salvaOupdateEdificio(ed);
		//servizio.salvaOupdatePostazione(pot);
		//servizio.salvaOupdateUtente(ut);
		//servizio.salvaPrenotazione(dPre, 1l, 1l);
		
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
