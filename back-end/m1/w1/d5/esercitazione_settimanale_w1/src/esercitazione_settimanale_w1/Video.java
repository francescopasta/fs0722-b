package esercitazione_settimanale_w1;

public class Video extends ArrayMultimediale implements Volume, Luminosita{
	int durata; 
	int volume;
	int luminosità;
	private int controlloImmagine = 0;

	public Video(String tit, int dur, int vol, int lum) {
		this.title = tit;
		this.durata = dur;
		this.volume = vol;
		this.luminosità = lum;
	}
	
	public void play() {
		String vol = "";
		String lum = "";
		for(int i = 0; i < this.volume; i++) {
			vol += "!";
		}
		
		for(int i = 0; i < this.luminosità; i++) {
			lum += "*";
		}
		
		for(int i = 0; i < this.durata; i++) {
			System.out.println(this.title + " " + vol + " " + lum);
		}	
	}
	
	public void aumentaVolume() {
		this.volume ++;
	}
	
	public void diminuisciVolume() {
		this.volume --;
	}
	
	public void aumentaLuminosita() {
		this.luminosità ++;
	}
	
	public void diminuisciluminosita() {
		this.luminosità --;
	}
	
	public int getControlloImmagine() {
		return controlloImmagine;
	}
}
