import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        // to make a reader/scanner for a input
        Scanner scan = new Scanner(System.in);

        System.out.println("Siapa namamu?"); 
        String name =  scan.nextLine(); // scan a line for string

        System.out.println("Umur kamu berapa?");
        int age = scan.nextInt(); // scan a line for int
        scan.nextLine(); //to clear the line, because it read int before 

        System.out.println("Apa makanan favoritmu?");
        String food = scan.nextLine(); // scan a line for string

        // to make the output
        System.out.println("Hallo "+name);
        System.out.println("Umurmu "+age);
        System.out.println("Makanan kesukaanmu adalah "+food);
    }
}