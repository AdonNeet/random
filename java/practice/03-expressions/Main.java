import java.util.Scanner;
import java.lang.Math; // Java Math Class

public class Main{
    public static void main(String[] args){
        /* 
        expression = operands and operators
        operands = values, variables, numbers, quantity
        operators = + - * / %

        yeah, thats is the basic
        */
        Scanner input = new Scanner(System.in);

        int j, t;
        System.out.println("Program menghitung ukuran tabung");
        System.out.print("Masukkan nilai jari2: "); j = input.nextInt();    // its linear input mode
        System.out.print("Masukkan nilai tinggi: "); t = input.nextInt();

        double ans = (double) Math.PI * Math.pow(j, 2) * t; // add double inside the expression, so we can store decimal num
        
        System.out.println("Hasilnya adalah "+ans);
    }
}