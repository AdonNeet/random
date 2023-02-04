public class PolyMorph {
    public static void main(String[] args) {
        /*
         *  Polymorphism = greek word for poly-"many", morph-"form"
         *              The ability of an object to identify as more than one type
         */


        Car car =  new Car();
        Motor motor = new Motor();
        Boat boat = new Boat();

        Vehivle[] racers = {car, motor, boat};

        for(Vehivle i : racers){
            i.go();
        }
    }
}
