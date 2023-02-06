package es_3;

public class BancaException extends Exception{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	String message;
	
	public BancaException(String param) {
		super(param);
		this.message = param;
	}
	
	public String toString() {
		return message;
	}
}
