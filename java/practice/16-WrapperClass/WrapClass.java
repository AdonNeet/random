
public class WrapClass {
    /*
     * wrapper class = provides a way to use primitive data types as refrence data types
     *                  refrence data types contain useful methods
     *                  ca be used with collections (ex: ArrayList)
     */

     /*
      * primitive           || wrapper
      * -------------------    -----------------------
      * boolean                 Boolean
      * char                    Character
      * int                     Integer
      * double                  Double
     */

      // autoboxing = the automatic conversion that the java compiler makes between the primitive and their corresponding object wrapper classes
      // unboxing = the reverse of autoboxing. Automatic conversion of wrapper class to primitive


    public static void main(String[] args){
        Boolean a = true;       // autoboxing... yeah.. the wrapper before the var name
        //Character b = '@';
        //Integer c = 123;
        //Double d = 3.14;
        //String e = "Adon";

        if(a==true){    // unboxing
            System.out.println("This is true");
        }
    }
}
