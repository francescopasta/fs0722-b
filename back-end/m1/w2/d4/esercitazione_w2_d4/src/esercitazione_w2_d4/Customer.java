package esercitazione_w2_d4;

public class Customer {
	private Long id;
	private String name;
	private int tier;
	
	public Customer(Long id, String name, int tier) {
		super();
		this.id = id;
		this.name = name;
		this.tier = tier;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getTier() {
		return tier;
	}
	
}
