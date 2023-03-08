package com.example.Esercizio_7_w2_d3.modules;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Utente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUtente;
	@Column(unique = true)
	private String username;
	private String fullname;
	@Column(unique = true) 
	private String email;
	//@OneToMany(mappedBy = "utente", fetch = FetchType.EAGER)
	//private List<Prenotazione> prenotazioni;
	
	@Override
	public String toString() {
		return "Utente [idUtente=" + idUtente + ", username=" + username + ", fullname=" + fullname + ", email=" + email
				+ "]";
	}
	
}
