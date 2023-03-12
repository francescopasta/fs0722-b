package com.example.spring.security.auth.runners;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.spring.dispositivi.Dispositivo;
import com.example.spring.dispositivi.DispositivoRepository;
import com.example.spring.dispositivi.StatoDispositivo;
import com.example.spring.dispositivi.TipoDispositivo;
import com.example.spring.security.auth.roles.ERole;
import com.example.spring.security.auth.roles.Role;
import com.example.spring.security.auth.roles.RoleRepository;
import com.example.spring.security.auth.users.User;
import com.example.spring.security.auth.users.UserRepository;

@Component
public class UserRunner implements ApplicationRunner {
	
	@Autowired RoleRepository roleRepository;
	@Autowired PasswordEncoder encoder;
	@Autowired UserRepository userRepo;
	@Autowired DispositivoRepository dispRepo;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Run..!");
		
		// SET DISPOSITIVI PREDEFINITI
		Dispositivo smartphone = new Dispositivo();
		smartphone.setTipo(TipoDispositivo.SMARTPHONE);
		smartphone.setStato(StatoDispositivo.DISPONIBILE);
		
		//dispRepo.save(smartphone);
		
		Dispositivo tablet = new Dispositivo();
		tablet.setTipo(TipoDispositivo.TABLET);
		tablet.setStato(StatoDispositivo.DISPONIBILE);
		
		//dispRepo.save(tablet);
		
		Dispositivo laptop = new Dispositivo();
		laptop.setTipo(TipoDispositivo.LAPTOP);
		laptop.setStato(StatoDispositivo.DISPONIBILE);
		
		//dispRepo.save(laptop);
		//
		
		// SET USERS DI BASE
		Role admin = new Role();
		admin.setRoleName(ERole.ROLE_ADMIN);
		//roleRepository.save(admin);
		
		Role user = new Role();
		user.setRoleName(ERole.ROLE_USER);
		//roleRepository.save(user);
		
		Role moderator = new Role();
		moderator.setRoleName(ERole.ROLE_MODERATOR);
		//roleRepository.save(moderator);
		
		
		Set<Role> adminRole = new HashSet<Role>();
		adminRole.add(admin);
		adminRole.add(moderator);
		adminRole.add(user);
		
		Set<Role> moderatorRole = new HashSet<Role>();
		moderatorRole.add(moderator);
		moderatorRole.add(user);
		
		Set<Role> userRole = new HashSet<Role>();
		userRole.add(user);
		
		Set<Dispositivo> user1 = new HashSet<Dispositivo>();
		user1.add(smartphone);
		
		Set<Dispositivo> user2 = new HashSet<Dispositivo>();
		user2.add(tablet);
		
		Set<Dispositivo> user3 = new HashSet<Dispositivo>();
		user3.add(laptop);
		
		
		User userAdmin = new User();
		userAdmin.setNome("Admino");
		userAdmin.setCognome("Stretor");
		userAdmin.setUsername("admin");
		userAdmin.setEmail("admin@example.com");
		userAdmin.setPassword(encoder.encode("admin"));
		userAdmin.setRoles(adminRole);
		userAdmin.setDispositivi(user1);
		//userRepo.save(userAdmin);
		
		User simpleUser = new User();
		simpleUser.setNome("Mario");
		simpleUser.setCognome("Rossi");
		simpleUser.setUsername("mariorossi");
		simpleUser.setEmail("m.rossi@example.com");
		simpleUser.setPassword(encoder.encode("12345"));
		simpleUser.setRoles(userRole);
		userAdmin.setDispositivi(user2);
		//userRepo.save(simpleUser);
		
		User userModerator = new User();
		userModerator.setNome("Giuseppe");
		userModerator.setCognome("Verdi");
		userModerator.setUsername("giuver");
		userModerator.setEmail("g.verdi@example.com");
		userModerator.setPassword(encoder.encode("qwerty"));
		userModerator.setRoles(moderatorRole);
		userAdmin.setDispositivi(user3);
		//userRepo.save(userModerator);
	}

}
