public class ArrJv {
    public static void main(String[] args){
        // indexing dimulai dari 0
        String[] cars = {"Toyota", "Suzuki", "Daihatsu", "Bajaj"};
        cars[3] = "Honda";
        System.out.println(cars[3]);
        System.out.println(cars+"\n");

        String[] motor = new String[3];
        motor[0] = "Honda"; motor[1] = "Yamaha"; motor[2] = "Kawasaki";

        // to print all use a loop
        for(int i=0;i<motor.length;i++){
            System.out.println(motor[i]);
        }
    }
}
