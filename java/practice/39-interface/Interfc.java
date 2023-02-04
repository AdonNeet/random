public class Interfc {
    /*
     *  interface = a template that can be applied to a class
     *              similar to inheritance, but specifies what a class has/must do
     *              classes can apply more than one interface, inheritance is limited to 1 superclasses
     * 
     *      Very similar with abstraction in superclass, but if you use it you must use the method inside the interface
     */
    public static void main(String[] args){
        Hawk hawk = new Hawk();
        Rabbit rabbit = new Rabbit();

        hawk.hunt();
        rabbit.flee();

        Fish fish = new Fish(); // 2 interface can be implemented at one class, check the source code of fish

        fish.hunt(); 
        fish.flee();
    } 
}
