import java.util.Scanner;

public class overloadMeth {
    public static void main(String[] args){
        /*
         * overloaded methods = methods that share the same name but have different parameters
         *          method name + parameters = method signature
         */
        Scanner input = new Scanner(System.in);

        System.out.print("Maukkan nilai A: "); int A = input.nextInt();
        System.out.print("Maukkan nilai B: "); int B = input.nextInt();
        System.out.print("Maukkan nilai C: "); int C = input.nextInt();
        System.out.print("Maukkan nilai D: "); int D = input.nextInt();

        input.close();
        System.out.println();

        System.out.println("A + B = "+add(A,B));    // overloadedMethod #1
        System.out.println("A + B + C = "+add(A,B,C));  // overloadedMethod #2
        System.out.println("A + B + C + D= "+add(A,B,C,D));  // overloadedMethod #3


    }

    static int add(int a, int b){
        return a+b;
    }

    static int add(int a, int b, int c){       // yeah, add more or make the parameter different
        return a+b+c;
    }

    static int add(int a, int b, int c, int d){
        return a+b+c+d;
    }
}
