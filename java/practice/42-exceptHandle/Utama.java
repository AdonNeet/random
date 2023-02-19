import java.util.Scanner;

public class Utama {
    public static void main(String[] args) {
        /*
         *  Exception = an event occurs during the executions of a program that,
         *              disrupts the normal flow of instructions
         */
    try {
        Scanner cin = new Scanner(System.in);
        Cout.cetak("Masukkan angka integer yang akan dibagi : "); double x = cin.nextInt();
        Cout.cetak("Masukkan angka integer yang akan membagi : "); double y = cin.nextInt();
        cin.close();
        // agar hasil desimalnya terlihat maka x dan y harus menggunakan double
        double z = x/y;
        
        Cout.cetak("Hasilnya "+z);
    }
    catch(ArithmeticException e){
        Cout.cetakln("Kau tidak bisa membagi dengan angka nol, bodoh!");
    }   
    }
}
