package es_1;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Thread extends java.lang.Thread {
	
	Logger log = LoggerFactory.getLogger(Thread.class);
	String symbol;

	public Thread(String symbol) {
		this.symbol = symbol;
	}

	@Override
	public void run() {
		for(int i = 0; i < 10; i++) {
			try {
				log.info(symbol);
				java.lang.Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
	
}
