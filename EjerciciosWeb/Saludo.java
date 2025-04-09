import java.util.Scanner;

public class Saludo {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingresa tu nombre: ");
        var nombre = sc.nextLine();

        System.out.printf("Tu nombre es %s, Bienvenido a la programación %n", nombre);
        sc.close();
    }
}