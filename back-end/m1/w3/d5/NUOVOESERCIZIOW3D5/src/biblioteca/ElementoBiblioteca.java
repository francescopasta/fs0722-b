package biblioteca;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.NamedQuery;


@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS) 
//@DiscriminatorColumn(name = "elemento_type", discriminatorType = DiscriminatorType.STRING)


//@NamedQuery(name = "removeByIsbn", query = "DELETE ElementoBiblioteca l WHERE l.codiceISBN = :n")
@NamedQuery(name = "removeByIsbn", query = "DELETE FROM ElementoBiblioteca l WHERE l.codiceISBN = :n")
@NamedQuery(name = "getByIsbn", query = "SELECT el FROM ElementoBiblioteca el WHERE el.codiceISBN = :n")
@NamedQuery(name = "getByAutore", query = "SELECT l FROM Libro l WHERE l.autore = :a")
@NamedQuery(name = "getByTitolo", query = "SELECT el FROM ElementoBiblioteca el WHERE el.titolo LIKE :a")
@NamedQuery(name = "getByAnno", query = "SELECT el FROM ElementoBiblioteca el WHERE el.anno= :n")

public abstract class ElementoBiblioteca {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	protected int codiceISBN;
	
	protected String titolo;
	protected int annoPubblicazione;
	@Column (name = "numero_pagine")
	protected int numeroPagine;
	
	public ElementoBiblioteca() {
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public int getAnnoPubblicazione() {
		return annoPubblicazione;
	}

	public void setAnnoPubblicazione(int annoPubblicazione) {
		this.annoPubblicazione = annoPubblicazione;
	}

	public int getNumeroPagine() {
		return numeroPagine;
	}

	public void setNumeroPagine(int numeroPagine) {
		this.numeroPagine = numeroPagine;
	}

	public int getCodiceISBN() {
		return codiceISBN;
	}
	
}
