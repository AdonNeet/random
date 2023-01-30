import java.util.Scanner;

public class InputVal {
    public static void main(String[] args){
        // to make a reader/scanner for a input
        Scanner scan = new Scanner(System.in);

        System.out.println("Siapa namamu?"); 
        String name =  scan.nextLine(); // scan a line for string

        System.out.print("Umur kamu berapa? "); // linear mode
        int age = scan.nextInt(); // scan a line for int in linear line mode
        
        scan.nextLine(); //to clear the line, because it read int before 

        System.out.println("Apa makanan favoritmu?");
        String food = scan.nextLine(); // scan a line for string, in another line

        // to close the input instance, close it after use (or it will leak)
        scan.close();

        // to make the output
        System.out.println("Hallo "+name);
        System.out.println("Umurmu "+age+" tahun");
        System.out.println("Makanan kesukaanmu adalah "+food);
    }
}
