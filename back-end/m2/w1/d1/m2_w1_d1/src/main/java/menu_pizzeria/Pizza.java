package menu_pizzeria;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Pizza extends Food{
	double prezzo;
	String basicTopping = "Mozzarella e Pomodoro";
	
	public Pizza(int kal, double prezz) {
		super(kal);
		this.prezzo = prezz;
	}
	
	public String printTopping() {
		return this.basicTopping;
	}
}
