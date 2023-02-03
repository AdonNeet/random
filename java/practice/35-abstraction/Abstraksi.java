public class Abstraksi {
    public static void main(String[] args){
        /*
         *  abstract = abstract classes cannot be instantiated, but they can have a subclass
         *              abstract method are declared without an implementation
         */

        // Vehicle vehicle = new Vehicle(); // it can, becaus abstracted

        Car car = new Car();

        car.go();
    }
}
