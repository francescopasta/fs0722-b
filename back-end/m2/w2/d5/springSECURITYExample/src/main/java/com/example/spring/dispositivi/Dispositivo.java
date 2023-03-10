package com.example.spring.dispositivi;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="dispositivi")
@NoArgsConstructor
@Data
public class Dispositivo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDispositivo;
	@Enumerated(EnumType.STRING)
	private ModelloDispositivo modello;
	@Enumerated(EnumType.STRING)
	private StatoDispositivo stato;
	
}
