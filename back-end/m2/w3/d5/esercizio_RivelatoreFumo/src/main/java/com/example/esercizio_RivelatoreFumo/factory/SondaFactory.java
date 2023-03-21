package com.example.esercizio_RivelatoreFumo.factory;

import com.example.esercizio_RivelatoreFumo.modules.Dispositivo;
import com.example.esercizio_RivelatoreFumo.modules.Sonda;

public class SondaFactory extends DispositivoFactory{

	@Override
	public Dispositivo crea() {
		return new Sonda();
	}

}
