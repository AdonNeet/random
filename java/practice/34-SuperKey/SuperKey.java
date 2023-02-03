public class SuperKey {
    public static void main(String[] args){
        /*
         *  super = keyword refers to the superclass (parent) of an object
         *          very similar to the "this" keyword
         */

        Hero A = new Hero("Adon", 17, "Code");

        Cout.cetak(A.toString()); 
        Cout.cetakln("\n");
        A.desc();
    }
}
