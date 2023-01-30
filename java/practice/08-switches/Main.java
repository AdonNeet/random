import java.util.Scanner;

public class Main {
    public static void main(String[] args){
         /*
           switch = statement that allows a var to be tested for equality againts
                    a list of value
        */ 

        Scanner input = new Scanner(System.in);

        System.out.println("Sekarang hari apa? (Kapital-only)");
        String day = input.nextLine();

        switch(day){
            case "Senin": System.out.println("Sekarang hari senin"); 
            break;
            case "Selasa": System.out.println("Sekarang hari selasa"); 
            break;
            case "Rabu": System.out.println("Sekarang hari rabu"); 
            break;
            case "Kamis": System.out.println("Sekarang hari kamis"); 
            break;
            case "Jumat": System.out.println("Sekarang hari jumat"); 
            break;
            case "Sabtu": System.out.println("Sekarang hari sabtu"); 
            break;
            case "Minggu": System.out.println("Sekarang hari minggu"); 
            break;

            // Jika tidak ada yang sama....
            default: System.out.println("Itu bukan kata kuncinya");
        }
    }
}
