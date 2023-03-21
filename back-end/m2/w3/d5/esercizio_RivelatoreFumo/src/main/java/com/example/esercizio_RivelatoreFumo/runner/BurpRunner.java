package com.example.esercizio_RivelatoreFumo.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.esercizio_RivelatoreFumo.factory.SondaFactory;
import com.example.esercizio_RivelatoreFumo.modules.CentroControllo;
import com.example.esercizio_RivelatoreFumo.modules.Sonda;
import com.example.esercizio_RivelatoreFumo.services.ServiceSonda;

@Component
public class BurpRunner implements ApplicationRunner {

	@Autowired ServiceSonda service;
	SondaFactory sFactory = new SondaFactory();
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Run..!");
		
		CentroControllo controllo = new CentroControllo();
		service.salvaCentro(controllo);
		CentroControllo controlloTest = service.getCentroById(1l);
		
		
		Sonda s1 = (Sonda) sFactory.crea();
		s1.setLatitudine(125);
		s1.setLongitudine(24);
		s1.setSmokeLevel(0);
		s1.setCentroControllo(controlloTest);
		Sonda s2 = (Sonda) sFactory.crea();
		s2.setLatitudine(233);
		s2.setLongitudine(200);
		s2.setSmokeLevel(0);
		s2.setCentroControllo(controlloTest);
		Sonda s3 = (Sonda) sFactory.crea();
		s3.setLatitudine(120);
		s3.setLongitudine(20);
		s3.setSmokeLevel(0);
		s3.setCentroControllo(controlloTest);
		
		service.sondaCrea(s1);
		service.sondaCrea(s2);
		service.sondaCrea(s3);
		
		ChangeSmokeLevel(1L,3);
		ChangeSmokeLevel(3L,9);
		
	}
	
	public void ChangeSmokeLevel(Long id, int a) {
		Sonda s = service.sondaTrovaTramiteId(id);
		s.setSmokeLevel(a);
		service.sondaUpdate(s);
	}
	
}
