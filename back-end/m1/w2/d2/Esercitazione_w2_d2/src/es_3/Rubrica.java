package es_3;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Rubrica {
	
	private Map<String, Integer> contatti = new HashMap<String, Integer>();
	Logger log = LoggerFactory.getLogger(MainClass_3.class);
	
	public void aggiungiContatto(String persona, int numero) {
		if(!contatti.containsKey(persona) || !contatti.containsValue(numero)) {
			contatti.put(persona, numero);
		} else {
			log.error("Il nome di Persona o numero di telefono è già stato inserito in Rubrica!");
		} 
	}
	
	public void rimuoviContatto(String persona, int numero) {
		if(contatti.containsKey(persona) && contatti.containsValue(numero)) {
			contatti.replace(persona, numero);
		} else {
			log.error("Il contatto inserito non esiste in rubrica!");
		} 
	}
	
	public void ricercaContattoTramiteNumero(int numero) {
		if(contatti.containsValue(numero));
	}
}
