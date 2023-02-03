package esercitazione_settimanale_w1;

public class Audio extends ArrayMultimediale implements Volume{
	int durata;
	int volume;
	private int controlloImmagine = 0;
	
	public Audio(String tit, int dur, int vol) {
		this.title = tit;
		this.durata = dur;
		this.volume = vol;
	}
	
	public void play() {
		
		String vol = "";
		for(int i = 0; i < this.volume; i++) {
			vol += "!";
		}
		
		for(int i = 0; i < this.durata; i++) {
			System.out.println(this.title + " " + vol);
		}	
		
	}
	
	public void aumentaVolume() {
		this.volume ++;
	}
	
	public void diminuisciVolume() {
		this.volume --;
	}

	public int getControlloImmagine() {
		return controlloImmagine;
	}
	
}
