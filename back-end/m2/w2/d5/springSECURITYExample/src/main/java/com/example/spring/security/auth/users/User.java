package com.example.spring.security.auth.users;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.example.spring.dispositivi.Dispositivo;
import com.example.spring.security.auth.roles.Role;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "username"),
		@UniqueConstraint(columnNames = "email") })
@Data
@NoArgsConstructor
@ToString
public class User {

	@Id
	//@SequenceGenerator(name = "be_service_users_seq", sequenceName = "be_service_users_seq", allocationSize = 1)
	//@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "be_service_users_seq")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 20)
	private String username;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(max = 120)
	private String password;

	@Size(max = 50)
	private String nome;

	@Size(max = 50)
	private String cognome;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "be_service_user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_dispositivo")
	private List<Dispositivo> dispositivi = new ArrayList<Dispositivo>();

	public User(Long id, @NotBlank @Size(max = 20) String username, @NotBlank @Size(max = 50) @Email String email,
			@NotBlank @Size(max = 120) String password, @Size(max = 50) String nome, @Size(max = 50) String cognome) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.nome = nome;
		this.cognome = cognome;
	}

}
