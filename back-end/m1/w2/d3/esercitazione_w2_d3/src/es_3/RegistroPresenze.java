package es_3;

import java.io.File;
import java.io.IOException;
import java.util.Map;

import org.apache.commons.io.FileUtils;


public class RegistroPresenze {
	File fill = new File("dir/persone.txt");
	
	public void scriviFile(Map<String, Integer> persona) throws IOException {
		
		String stringa = "";
		
		for(String key: persona.keySet()) {
			stringa += key + "@" + persona.get(key) + "#";
		}
		
		FileUtils.writeStringToFile(fill, stringa, "UTF-8");
	}
	
	public String leggifile() throws IOException {
		return FileUtils.readFileToString(fill, "UTF-8");
	}
	
}