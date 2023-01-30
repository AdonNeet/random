import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        String name = "";

        while(name.isBlank()){
            System.out.print("Masukkan namamu: "); name = input.nextLine(); // jangan pakai next, error
        }

        System.out.println("Hallo "+name);
    }
}
