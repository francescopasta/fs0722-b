package com.example.Esercizio_7_w2_d3.modules;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@NoArgsConstructor
@Getter
@Setter
public class Postazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPostazione;
	private String descrizione;
	private TipoPostazione tipo;
	private int numeroMassimoPosti;
	@ManyToOne
	@JoinColumn(name = "idEdificio")
	private Edificio ed;
	
	@Override
	public String toString() {
		return "Postazione [idPostazione=" + idPostazione + ", descrizione=" + descrizione + ", tipo=" + tipo
				+ ", numeroMassimoPosti=" + numeroMassimoPosti + ", ed=" + ed.toString() + "]";
	}
	
}
