package com.example.esercizio_RivelatoreFumo.modules;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@ToString
public class Sonda extends Dispositivo{
	
	private int latitudine;
	private int longitudine;
	private int smokeLevel;
	@ManyToOne
	private CentroControllo centroControllo;
	
	public void setLatitudine(int latitudine) {
		this.latitudine = latitudine;
	}
	public void setLongitudine(int longitudine) {
		this.longitudine = longitudine;
	}
	public void setSmokeLevel(int smokeLevel) {
		this.smokeLevel = smokeLevel;
		if(this.smokeLevel >= 5) {
			centroControllo.allarmeIncendio(getId(), latitudine, longitudine, smokeLevel);
		}
	}
	public void setCentroControllo(CentroControllo centroControllo) {
		this.centroControllo = centroControllo;
	}
	
}
