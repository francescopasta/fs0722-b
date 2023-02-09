package esercitazione_w2_d4;

import java.time.LocalDate;
import java.util.List;

public class Order {
	private Long id;
	private String Status;
	private LocalDate orderDate;
	private LocalDate delivaryDate;
	private List<Product> products;
	private Customer customer;
	
	public Order(Long id, String status, LocalDate orderDate, LocalDate delivaryDate, List<Product> products,
			Customer customer) {
		this.id = id;
		Status = status;
		this.orderDate = orderDate;
		this.delivaryDate = delivaryDate;
		this.products = products;
		this.customer = customer;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public Long getId() {
		return id;
	}

	public String getStatus() {
		return Status;
	}

	public LocalDate getDelivaryDate() {
		return delivaryDate;
	}

	public List<Product> getProducts() {
		return products;
	}

	public Customer getCustomer() {
		return customer;
	}
	
}
