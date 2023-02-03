public class MethOver {
    public static void main(String[] args){
        /*
         *  method overriding = declaring a method in subclass
         *                      which is already present in parent class.
         *                      done so that a child class can give its own implementation
         */

        Animal hewan = new Animal();
        Dog dog = new Dog();

        dog.speak(); // it call speak meth from dog, but not do meth from animal
        hewan.speak(); // it call speak meth from animal only


    }
}
