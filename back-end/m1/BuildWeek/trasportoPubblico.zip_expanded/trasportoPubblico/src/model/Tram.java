package model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("tram")
public class Tram extends Mezzo {
	private int postiMax = 20;

	public Tram() {
		super();
	}

	public int getPostiMax() {
		return postiMax;
	}

	public void setPostiMax(int postiMax) {
		this.postiMax = postiMax;
	}

	@Override
	public String toString() {
		return "Tram [postiMax=" + postiMax + "]";
	}

}
