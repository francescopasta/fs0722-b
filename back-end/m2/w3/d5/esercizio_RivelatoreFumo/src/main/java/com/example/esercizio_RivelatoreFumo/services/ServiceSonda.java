package com.example.esercizio_RivelatoreFumo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.esercizio_RivelatoreFumo.modules.CentroControllo;
import com.example.esercizio_RivelatoreFumo.modules.Sonda;
import com.example.esercizio_RivelatoreFumo.repository.CentroControlloRepository;
import com.example.esercizio_RivelatoreFumo.repository.SondaRepository;

@Service
public class ServiceSonda {
	
	@Autowired CentroControlloRepository centroRepo;
	@Autowired SondaRepository sondaRepo;
	
	public CentroControllo salvaCentro(CentroControllo ct) {
        centroRepo.save(ct);
        return ct;
    }

    public void eliminaCentro(CentroControllo ct) {
        centroRepo.delete(ct);
    }

    public CentroControllo getCentroById(Long id) {
        return centroRepo.findById(id).get();
    }

    public List<CentroControllo> getAllCentri() {
        return (List<CentroControllo>) centroRepo.findAll();
    }
    
    
    //   SONDA   //
    
    
    public Sonda sondaCrea(Sonda sn) {
        sondaRepo.save(sn);
        return sn;
    }

    public Sonda sondaUpdate(Sonda sn) {

        sondaRepo.save(sn);
        return sn;
    }

    public void sondaElimina(Sonda sn) {
        sondaRepo.delete(sn);
    }

    public Sonda sondaTrovaTramiteId(Long id) {
        return sondaRepo.findById(id).get();
    }

    public List<Sonda> sondaTrovaTutti() {
        return (List<Sonda>) sondaRepo.findAll();
    }
	
}
