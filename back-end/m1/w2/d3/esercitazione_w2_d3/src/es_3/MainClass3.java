package es_3;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MainClass3 {
	
	public static Logger log = LoggerFactory.getLogger(MainClass3.class);

	public static void main(String[] args) throws IOException {
		Map<String, Integer> presenze = new HashMap<String, Integer>();

		presenze.put("john", 24);
		presenze.put("tim", 12);
		presenze.put("cole", 21);
		presenze.put("Brian", 13);
		
		RegistroPresenze file = new RegistroPresenze();
		
		file.scriviFile(presenze);
		log.info(file.leggifile());
		
	}

}
