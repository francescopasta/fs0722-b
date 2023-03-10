package com.example.spring.security.auth.runners;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.spring.dispositivi.Dispositivo;
import com.example.spring.dispositivi.ModelloDispositivo;
import com.example.spring.dispositivi.StatoDispositivo;
import com.example.spring.security.auth.roles.ERole;
import com.example.spring.security.auth.roles.Role;
import com.example.spring.security.auth.roles.RoleRepository;
import com.example.spring.security.auth.users.User;
import com.example.spring.security.auth.users.UserRepository;
import com.example.spring.service.UserService;

@Component
public class UserRunner implements ApplicationRunner {
	
	@Autowired RoleRepository roleRepository;
	@Autowired PasswordEncoder encoder;
	@Autowired UserService service;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Run..!");
		
		// SET DISPOSITIVI PREDEFINITI
		/*Dispositivo smartphone = new Dispositivo();
		smartphone.setModello(ModelloDispositivo.SMARTPHONE);
		smartphone.setStato(StatoDispositivo.DISPONIBILE);
		
		service.createDisp(smartphone);*/
		
		/*Dispositivo tablet = new Dispositivo();
		tablet.setModello(ModelloDispositivo.SMARTPHONE);
		tablet.setStato(StatoDispositivo.DISPONIBILE);
		
		service.createDisp(tablet);
		
		Dispositivo laptop = new Dispositivo();
		laptop.setModello(ModelloDispositivo.SMARTPHONE);
		laptop.setStato(StatoDispositivo.DISPONIBILE);
		
		service.createDisp(laptop);
		//
		
		// SET USERS DI BASE
		Role admin = new Role();
		admin.setRoleName(ERole.ROLE_ADMIN);
		roleRepository.save(admin);
		
		Role user = new Role();
		user.setRoleName(ERole.ROLE_USER);
		roleRepository.save(user);
		
		Role moderator = new Role();
		moderator.setRoleName(ERole.ROLE_MODERATOR);
		roleRepository.save(moderator);
		
		
		Set<Role> adminRole = new HashSet<Role>();
		adminRole.add(admin);
		adminRole.add(moderator);
		adminRole.add(user);
		
		Set<Role> moderatorRole = new HashSet<Role>();
		moderatorRole.add(moderator);
		moderatorRole.add(user);
		
		Set<Role> userRole = new HashSet<Role>();
		userRole.add(user);
		
		List<Dispositivo> user1 = new ArrayList<Dispositivo>();
		user1.add(laptop);
		
		List<Dispositivo> user2 = new ArrayList<Dispositivo>();
		user2.add(tablet);
		
		List<Dispositivo> user3 = new ArrayList<Dispositivo>();
		user3.add(tablet);*/
		
		
		/*User userAdmin = new User();
		userAdmin.setNome("Admino");
		userAdmin.setCognome("Stretor");
		userAdmin.setUsername("admin");
		userAdmin.setEmail("admin@example.com");
		userAdmin.setPassword(encoder.encode("admin"));
		userAdmin.setRoles(adminRole);
		userAdmin.setDispositivi(user1);
		service.updateUser(userAdmin);
		
		User simpleUser = new User();
		simpleUser.setNome("Mario");
		simpleUser.setCognome("Rossi");
		simpleUser.setUsername("mariorossi");
		simpleUser.setEmail("m.rossi@example.com");
		simpleUser.setPassword(encoder.encode("12345"));
		simpleUser.setRoles(userRole);
		userAdmin.setDispositivi(user2);
		service.updateUser(simpleUser);
		
		User userModerator = new User();
		userModerator.setNome("Giuseppe");
		userModerator.setCognome("Verdi");
		userModerator.setUsername("giuver");
		userModerator.setEmail("g.verdi@example.com");
		userModerator.setPassword(encoder.encode("qwerty"));
		userModerator.setRoles(moderatorRole);
		userAdmin.setDispositivi(user3);
		service.updateUser(userModerator);*/
	}

}
