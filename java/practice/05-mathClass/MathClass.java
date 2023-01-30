import java.util.Scanner; 
import java.lang.Math;

public class MathClass {
    public static void main(String[] args){
        // read documentation for the usage...
        // always call the class to use it 

        Scanner input =  new Scanner(System.in);

        System.out.println("Program mencari garis miring segitiga");
        System.out.print("Masukkan sisi x: "); double x = input.nextDouble();
        System.out.print("Masukkan sisi y: "); double y = input.nextDouble();

        input.close();

        // rumus nya... z = akarKuadrat(x kuadrat + y kuadrat)
        double ans = Math.sqrt((Math.pow(x, 2)+Math.pow(y, 2)));
        System.out.println("Maka panjang garis miringnya adalah "+ans);
    }
}
