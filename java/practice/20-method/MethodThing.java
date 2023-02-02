import java.util.Scanner;

public class MethodThing {
    public static void main(String[] args){
        // methood =  a blockk of code that is executed whenever it is called upon

        Scanner input =  new Scanner(System.in);

        System.out.print("Siapa namamu? ");
        String name = input.nextLine();

        System.out.print("Berapa umurmu? ");
        int age = input.nextInt();

        hello(name, age);
        System.out.println();

        System.out.print("Masukkan nilai X : ");
        int x = input.nextInt();

        System.out.print("Masukkan nilai Y : ");
        int y = input.nextInt();

        input.close();

        int ans = jumlah(x, y);
        System.out.println("Hasil penjumlahan: "+ans);
        System.out.println("Hasil pengurangan: "+kurang(x,y));


    }

    static void hello(String nama, int umur){    // use static to make the scope global into another class
        System.out.println("\nHello "+nama);    //to call it in another class use nameclass.method()
        System.out.println("Umur kamu "+umur+" tahun");
    }

    static int jumlah(int a, int b){
        int temp = a + b;
        return temp;
    }

    static int kurang(int a, int b){
        return a - b;
    }
}
