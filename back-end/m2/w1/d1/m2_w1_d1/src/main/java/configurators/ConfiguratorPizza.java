package configurators;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import menu_pizzeria.Pizza;

@Configuration
public class ConfiguratorPizza {

	@Bean
	@Scope("singleton")
	public Pizza margherita() {
		return new Pizza(1104, 4.99);
	}
	
	@Bean
	@Scope("prototype")
	public Pizza hawaii() {
		return new 
	}
}
