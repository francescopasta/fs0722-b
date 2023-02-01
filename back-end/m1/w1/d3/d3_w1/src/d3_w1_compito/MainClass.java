package d3_w1_compito;

import java.util.Scanner;

public class MainClass {
	
	static Scanner in = new Scanner(System.in);

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//es.1
		System.out.println(PariDispari("Sciabalababa"));
		System.out.print("Inserisci un anno, ti dirò se è bisestile o no: ");
		if(annoBisestile(in.nextInt())) {
			System.out.println("Bisestile!");
		} else {
			System.out.println("Non bisestile");
		}
		//
		
		//es.2
        System.out.print("Inserisci un intero compreso tra 0 e 3: ");
        switchCicle(in.nextInt());
        //
        
        //es.3
        whileCicle();
        //
        
        //es.4
        System.out.print("Inserisci un numero dal quale far partire il count down: ");
        forCicle(in.nextInt());
		//
		
	}
	
	public static boolean PariDispari(String parola) {
        int lunghezza = parola.length();
        return lunghezza % 2 == 0;
    }
    
    public static boolean annoBisestile(int anno) {
        if (anno % 400 == 0) {
            return true;
        } else if (anno % 100 == 0) {
            return false;
        } else if (anno % 4 == 0) {
            return true;
        } else {
            return false;
        }
    }
    
    public static void switchCicle(int numb) {
    	switch (numb) {
	        case 0:
	            System.out.println("zero");
	            break;
	        case 1:
	            System.out.println("uno");
	            break;
	        case 2:
	            System.out.println("due");
	            break;
	        case 3:
	            System.out.println("tre");
	            break;
	        default:
	            System.out.println("Il valore inserito supera il 3");
    	}	
    }
    
    public static void whileCicle() {
    	while(true) {
    		System.out.print("Digita una parola (premi :q per uscire): ");
    		String word = in.nextLine();
    		if(word.equals(":q")) {
    			break;
    		}
			System.out.println("La tua parola: " + String.join(",", word.split("")));
    	}
    }
    
    public static void forCicle(int numb) {
    	for(int i = numb; i >= 0; i--) {
    		System.out.println(i);
    	}
    }
}

