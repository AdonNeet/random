import java.util.Scanner;

public class cin {
    /*
     *  note : onnly for one var :)
     *  AdonNeet 2023
     */

    // section for answer in sameline
    public static String text(String Question){   // return string
        Scanner input = new Scanner(System.in);
        System.out.print(Question);
        String Answer = input.nextLine(); 
        input.close();
        return Answer;
    }
    public static int real(String Question){        // return integer
        Scanner input = new Scanner(System.in);
        System.out.print(Question);
        int Answer = input.nextInt(); 
        input.close();
        return Answer;
    }
    public static double unreal(String Question){        // return integer
        Scanner input = new Scanner(System.in);
        System.out.print(Question);
        double Answer = input.nextDouble(); 
        input.close();
        return Answer;
    }

    // section for answer in newline
    public static String lntext(String Question){   // return string
        Scanner input = new Scanner(System.in);
        System.out.println(Question);
        String Answer = input.nextLine(); 
        input.close();
        return Answer;
    }
    public static int lnreal(String Question){        // return integer
        Scanner input = new Scanner(System.in);
        System.out.println(Question);
        int Answer = input.nextInt(); 
        input.close();
        return Answer;
    }
    public static double lnunreal(String Question){        // return integer
        Scanner input = new Scanner(System.in);
        System.out.println(Question);
        double Answer = input.nextDouble(); 
        input.close();
        return Answer;
    }

    // section for clear a line after get input type int-double
    public static String clear(){        // return integer
        Scanner input = new Scanner(System.in);
        input.nextLine(); 
        input.close();
        return null;
    }
}
