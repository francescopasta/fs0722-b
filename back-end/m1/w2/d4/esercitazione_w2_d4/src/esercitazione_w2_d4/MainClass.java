package esercitazione_w2_d4;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MainClass {
		
	public static void main(String[] args) {
		
		List<Product> prodotti = Arrays.asList(
					new Product(1l, "John", "Books", 24.50),
					new Product(2l, "Brom al Bam", "Books", 200.00),
					new Product(3l, "K-i", "Baby", 35.00),
					new Product(4l, "Bi Bi La", "Books", 300.00),
					new Product(3l, "la la", "Baby", 20.00)
				);
		//Es.1
		List<Product> listaFiltrata = ottenereBooks(prodotti);
		listaFiltrata.forEach(ele -> System.out.println(ele));
		//
		
		//Es.2
		Customer c = new Customer(1l, "Mario Brossi", 22);
		
		Order o1 = new Order(1l, "Payed", null, null, prodotti, c);
		Order o2 = new Order(2l, "not-payed", null, null, prodotti, c);
		
		List<Order> ordini = Arrays.asList(o1, o2);
		ottenereOrdini(ordini);
		//
		
		
	}
	
	public static List<Product> ottenereBooks(List<Product> prods) {
		return prods.stream()
			 .filter(e -> e.getCategory().equalsIgnoreCase("Books"))
			 .filter(e -> e.getPrice() > 100)
			 .collect(Collectors.toList());
	}
	
	public static List<Order> ottenereOrdini(List<Order> ords){
		return ords.stream()
			.filter(e -> e.getProducts().stream().anyMatch(pr -> pr.getCategory().equalsIgnoreCase("Baby")))
			.collect(Collectors.toList());
	}

}
