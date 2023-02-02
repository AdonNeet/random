public class Objek {
    public static void main(String[] args){
        /*
         * object = an instance of a class that may contain atrtributes and methods
         * ex: phone, animal, computer, human, car,....
         * 
         */

        Car mobil = new Car();

         
        cetak(mobil.model);
        mobil.drive();

        cetak(mobil.year);
        mobil.year = 2018;
        cetak(mobil.year);

        cetak(mobil.price);

    }

    // it will better to make many overload method for make a alter for define (like in python)
    public static void cetak(String ans){
        System.out.println(ans);
    }

    public static void cetak(int ans){
        System.out.println(ans);
    }

    public static void cetak(double ans){
        System.out.printf("%,.2f",ans);
    }
}
