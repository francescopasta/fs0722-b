package es_1;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ClassMain1 {
	
	public static Logger log = LoggerFactory.getLogger(ClassMain1.class);
	
	public static void main(String[] args) {
		
		Thread a = new Thread("*");
		Thread b = new Thread("#");
		
		a.start();
		b.start();
		
	}

}
