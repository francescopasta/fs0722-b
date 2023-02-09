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

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Long getId() {
		return id;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public LocalDate getDelivaryDate() {
		return delivaryDate;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", Status=" + Status + ", orderDate=" + orderDate + ", delivaryDate=" + delivaryDate
				+ ", products=" + products + ", customer=" + customer + "]";
	}

	
	
}
