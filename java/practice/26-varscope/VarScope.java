public class VarScope{
    public static void main(String[] args){
        /*
         *  local = declared inside a method (visible only to that method)
         *  global = declare outside a method, but within a class (visible to all parts of a class)
         * 
         *  checkout the Dice.java to know the different
         */

        Dice dadu = new Dice();

        dadu.roll(dadu.rand, dadu.num); // must call the object to call her proprty in here
    }
}