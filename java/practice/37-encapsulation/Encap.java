public class Encap {
    public static void main(String[] args){
        /*
         *  Encapsulation = attributes of a class will be hidden or private
         *                  can be accessed only through methods (getters and setters)
         *                  you should make attributes private if you dont have a reason to make them
         * 
         *  
         */

        Car car =  new Car("Daihatsu", "Xenia", 2022);

        Cout.cetakln(car.getMake());
        Cout.cetakln(car.getModel());
        Cout.cetakln(car.getYear());

        // add change in the year
        car.setYear(2005);
        Cout.cetakln("\n"+car.getYear());


    } 
}
