package esercitazione_settimanale_w1;

public class Image extends ArrayMultimediale implements Luminosita{
	
	int luminosita;
	private int controlloImmagine = 1;
	
	public Image(String tit, int lum) {
		this.title = tit;
		this.luminosita = lum;
	}
	
	public void aumentaLuminosita() {
		this.luminosita ++;
	}
	
	public void diminuisciluminosita() {
		this.luminosita --;
	}
	
	public void show() {
		String lum = "";
		for(int i = 0; i < this.luminosita; i++) {
			lum += "*";
		}
		System.out.println(this.title + " " + lum);
	}

	public int getControlloImmagine() {
		return controlloImmagine;
	}
	
}
