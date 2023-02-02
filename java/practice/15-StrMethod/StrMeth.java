
public class StrMeth {
    public static void main(String[] args){
        /*
         * String = a refrence data type that can store one or more characters
         *         refrence data types have access to useful methods
         */

        String name = "Adon";
        String name2 = "         Adon   ";

        boolean result1 = name.equalsIgnoreCase("adon");
        int result2 = name.length();
        char result3 = name.charAt(0);
        int result4 =  name.indexOf("o");
        boolean result5 = name.isEmpty(); // will true when name var empty
        String result6 = name.toUpperCase();
        String result7 = name.toLowerCase();
        String result8 = name2.trim();
        String result9 = name2.replace('n', 'h');

        System.out.println(
            result1+"\n"+
            result2+"\n"+
            result3+"\n"+
            result4+"\n"+
            result5+"\n"+
            result6+"\n"+
            result7+"\n"+
            result8+"\n"+
            result9+"\n"
        );

    }
}
