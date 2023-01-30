import java.util.Scanner;

public class logicOP {
    public static void main(String[] args){
        /*
         * logical operators = used to connect two or more expressions
         *      && AND
         *      || OR
         *      ! NOT
         */

        Scanner input = new Scanner(System.in);
        System.out.print("Berapa suhu saat ini? (C but int) ");
        int deg = input.nextInt();

        input.close();

        if(deg>=37){ // mirip seperti c++ untuk if statement
            System.out.println("Suhu saat ini panas");
        }else if((deg>=32)&&(deg<37)){
            System.out.println("Suhu saat ini ideal");    
        }else{
            System.out.println("Suhu saat ini digin");
        }
    }
}
