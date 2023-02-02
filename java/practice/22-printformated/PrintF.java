

public class PrintF {
    public static void main(String[] args){
        /*
         * printf() = an optional menthod to control, format, and display text to the console window
         *              two argumens = format string + (object/var/value)
         *              % [flags] [precision] [width] [conversion-character]
         *              
         *              %d for integer
         *              %f for double (f = float)
         *              %b for boolean
         *              %c for character
         *              %s for string
         * 
         */

         System.out.printf("Hello %s\n\n", "yeah, you");

        // [conversion-character]
         System.out.printf("%s %d\n", "This is a format string has int ", 123);
         System.out.printf("%s %b\n", "This is a format string has boolean ", true);
         System.out.printf("%s %f\n\n", "This is a format string has float", 123.456);
        // yep, manual newline with \n

        // [width]
        // minimum number of characters to be written as output
        System.out.printf("Hello %10s\n\n", "Adon"); // it has 10 space before my name

        // [precicion]
        // set number of digits of precision when outputthing floating-point , 2 num after comma
        System.out.printf("You have this much money: %.2f USD\n\n", 100.5);

        // [flags]
        // adds an effect to output based on the flag added to format specifier
        /*
         * - : left-justify
         * + : output a plus (+) or minus (-) sign for a numeric value
         * 0 : numeric values are zero-padded
         * , : comma grouping separator if numbers > 1000
        */
        System.out.printf("Your debt has change: %+,.2f USD\n", -11000.5);
        System.out.printf("%s", "You are now millionaire");


    }
}
