import java.util.Scanner;

public class Utama {
    // dynamic polymorphism, after compilation can increase or decrease (during runtime)
    public static void main(String[] args) {
       
        Scanner input = new Scanner(System.in);
        Animal animal; // declare the init var for dynamic var
        
        Cout.cetakln("Hewan apa yang kamu inginkan");
        Cout.cetakln("1 for dog or 2 for cat");
        int choice = input.nextInt();

        if(choice==1){
            animal = new Dog();
            animal.speak();
        }else if(choice==2) {
            animal = new Cat();
            animal.speak();
        }else {
            animal = new Animal();
            Cout.cetakln("Pilihanmu salah");
            animal.speak();
        }
    }
}
