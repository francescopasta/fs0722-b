package model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("autobus")
public class Autobus extends Mezzo {
 
	private int postiMax= 10;

	public Autobus() {
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
		return "Autobus [postiMax=" + postiMax + "]";
	}
	
}
