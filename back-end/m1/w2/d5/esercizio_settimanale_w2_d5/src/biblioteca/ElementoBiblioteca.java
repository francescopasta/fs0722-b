package biblioteca;

public abstract class ElementoBiblioteca {
	private Long codiceISBN;
	private String titolo;
	private int annoPubblicazione;
	private int numeroPagine;
	
	public ElementoBiblioteca(Long codiceISBN, String titolo, int annoPubblicazione, int numeroPagine) {
		this.codiceISBN = codiceISBN;
		this.titolo = titolo;
		this.annoPubblicazione = annoPubblicazione;
		this.numeroPagine = numeroPagine;
	}
	
	public Long getCodiceISBN() {
		return codiceISBN;
	}
	public String getTitolo() {
		return titolo;
	}
	public int getAnnoPubblicazione() {
		return annoPubblicazione;
	}
	public int getNumeroPagine() {
		return numeroPagine;
	}
	public void setCodiceISBN(Long codiceISBN) {
		this.codiceISBN = codiceISBN;
	}
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	public void setAnnoPubblicazione(int annoPubblicazione) {
		this.annoPubblicazione = annoPubblicazione;
	}
	public void setNumeroPagine(int numeroPagine) {
		this.numeroPagine = numeroPagine;
	}
}
