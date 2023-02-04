public class CpyObj {
    public static void main(String[] args){
        Car car1 = new Car("Toyota", "Xenia", 2005);
        Car car2 = new Car(null, null, 0);

        // car 2 had same specification
        car2.copy(car1);

        Cout.cetakln(car2.getMake());
        Cout.cetakln(car2.getModel());
        Cout.cetakln(car2.getYear());
        Cout.cetakln(" ");

        // or make it with overloaded construct

        Car car3 = new Car(car2);
        Cout.cetakln(car3.getMake());
        Cout.cetakln(car3.getModel());
        Cout.cetakln(car3.getYear());
        Cout.cetakln(" ");
    }
}
