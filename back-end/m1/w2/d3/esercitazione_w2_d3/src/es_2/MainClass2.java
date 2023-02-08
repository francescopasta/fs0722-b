package es_2;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MainClass2 {

	public static Logger log = LoggerFactory.getLogger(MainClass2.class);
	
	public static void main(String[] args) throws InterruptedException {
		
		
		Thread2 a = new Thread2(1, randomList(3000));
		Thread2 b = new Thread2(2, randomList(3000));
		Thread2 c = new Thread2(3, randomList(3000));
		
		a.start();
		a.join();
		b.start();
		b.join();
		c.start();
		c.join();
		
		calcolaTotale(a,b,c);

	}
	
	public static List<Integer> randomList(int n) {
		List<Integer> l = new ArrayList<Integer>();
		for(int i = 0; i < n; i++) {
			Random random = new Random();
			l.add(i ,random.nextInt(3001)) ;
		}
		return l;
	}
	
	public static void calcolaTotale(Thread2 a, Thread2 b, Thread2 c) {
		int Tot = (a.somma + b.somma + c.somma);
		log.info("Totale: " + Tot);
	}

}
