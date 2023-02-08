package es_2;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import es_2.Thread2;

public class Thread2 extends Thread {
	
	Logger log = LoggerFactory.getLogger(Thread2.class);
	
	int div;
	List<Integer> numeri;
	int somma = 0;

	public Thread2(int div, List<Integer> numeri) {
		this.div = div;
		this.numeri = numeri;
	}

	@Override
	public void run() {
		
		if(div == 1) {
			for(int i = 0; i < 1000; i ++) {
				somma += this.numeri.get(i);
			}
		} else if(div == 2) {
			for(int i = 1000; i < 2000; i ++) {
				somma += this.numeri.get(i);
			}
		} else if(div == 3) {
			for(int i = 2000; i < 3000; i ++) {
				somma += this.numeri.get(i);
			}
		} else {
			log.info("Errore! Inserire un numero da 1 a 3");
		}
		
		log.info(String.valueOf(somma));
	}
	
}
