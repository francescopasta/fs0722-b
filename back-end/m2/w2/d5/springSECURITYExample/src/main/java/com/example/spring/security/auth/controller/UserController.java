package com.example.spring.security.auth.controller;


import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.dispositivi.Dispositivo;
import com.example.spring.security.auth.users.User;
import com.example.spring.security.auth.users.UserRepository;
import com.example.spring.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	UserRepository userRepository;
	@Autowired UserService service;
	
	@GetMapping("/users")
	@PreAuthorize("hasRole('ADMIN')")
	public Page<User> userList(Pageable pageable) {

		
		Page<User> findAll = userRepository.findAll(pageable);

		findAll.forEach(usr -> usr.setPassword("********"));
		
		return findAll;

	}
	
	@GetMapping("/users/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User u = service.getUserById(id);
		u.setPassword("********");
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}
	
	@PutMapping("/users/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<User> updateUser(@Valid @RequestBody User user) {
		return new ResponseEntity<User>(service.updateUser(user), HttpStatus.OK);
	}
	
	@DeleteMapping("/users/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> deleteUser(@PathVariable Long id){
		return new ResponseEntity<String>(service.removeUser(id), HttpStatus.OK);
	}

}
