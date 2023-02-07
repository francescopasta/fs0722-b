package es_2;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class MainClass {

	public static Logger log = LoggerFactory.getLogger(MainClass.class);
	
	public static void main(String[] args) {
		
		List<String> bob = randomList(5);
		
		reversedList(bob);
		
	}
	
	public static List<String> randomList(int n) {
		List<String> l = new ArrayList<String>();
		
		for(int i = 0; i < n; i++) {
			Random random = new Random();
			l.add(i ,String.valueOf(random.nextInt(101))) ;
			log.info(l.get(i));
		}
		
		return l;
		
	}
	
	public static void reversedList(List<String> boss) {
		List<String> reversed = new ArrayList<String>();
		reversed = boss;
		Object[] a = reversed.toArray();
		
		for(int i = a.length; i > 0; i--) {
			//log.info("Lista: " + a[i]);
			log.info("Ciao");
		}
		
		log.info("Lista: " + reversed);
	}
	
	public static void pairDispair(List<String> pair, boolean tu) {
		
		if(tu) {
			
		}
	}

}
