import java.util.Scanner;

public class whileStat {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        String name = "";

        while(name.isBlank()){
            System.out.print("Masukkan namamu: "); 
            name = input.nextLine(); // jangan pakai next, error
        }

        input.close();
        System.out.println("Hallo "+name);
    }
}
