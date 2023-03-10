package com.example.spring.service;

import java.util.List;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring.dispositivi.Dispositivo;
import com.example.spring.dispositivi.DispositivoRepository;
import com.example.spring.dispositivi.ModelloDispositivo;
import com.example.spring.security.auth.users.User;
import com.example.spring.security.auth.users.UserRepository;


@Service
public class UserService {

	@Autowired UserRepository userRepo;
	@Autowired DispositivoRepository dispoRepo;
	
	public User createUser(User user) {
		if(userRepo.existsByUsername(user.getUsername())) {
			throw new EntityExistsException("Username already in use...");  
		} else if(userRepo.existsByEmail(user.getEmail())) {
			throw new EntityExistsException("There's already a User registered with this Email.");
		} else {
			userRepo.save(user);
		}
		return user;
	}
	
	public List<User> getAllUsers(){
		return (List<User>) userRepo.findAll();
	}
	
	public User getUserById(Long id) {
		if(!userRepo.existsById(id)) {
			throw new EntityExistsException("User doesn't exist...");  
		} 
		return userRepo.findById(id).get();
	}
	
	public User updateUser(User user) {
		if(!userRepo.existsById(user.getId())) {
			throw new EntityExistsException("User doesn't exist...");  
		}
		return userRepo.save(user);
	}
	
	public String removeUser(Long id) {
        if(!userRepo.existsById(id)) {
             throw new EntityNotFoundException("Cannot delete a user that dont exist...");
        } else {
        	userRepo.deleteById(id);
        }
        return "User deleted!!!";
    }
	
	
	//  DISPOSITIVO
	
	
	public void createDisp(Dispositivo disp) {
		dispoRepo.save(disp);
	}
	
	public List<Dispositivo> getAllDispositivi(){
		return (List<Dispositivo>) dispoRepo.findAll();
	}
	
	public Dispositivo getDispoById(Long id) {
		if(!dispoRepo.existsById(id)) {
			throw new EntityExistsException("Dispositivo doesn't exist...");  
		} 
		return dispoRepo.findById(id).get();
	}
	
	/*public User updateStatoDispo(User user) {
		user.getDispositivi().forEach(e -> {
			if(userRepo.existsByModelloDispositivo(e.getModello())){
				userRepo.save(user);
			}
		});
		return user;
	}*/
	
	public String removeDispo(Long id) {
        if(!dispoRepo.existsById(id)) {
             throw new EntityNotFoundException("Cannot delete a Dispositivo that dont exist...");
        } else {
        	dispoRepo.deleteById(id);
        }
        return "User deleted!!!";
    }
	
}
