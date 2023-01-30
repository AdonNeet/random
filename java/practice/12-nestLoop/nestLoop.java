import java.util.Scanner;

public class nestLoop {
    // nested loop = loop inside loop
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        int row, columns; String ans = "";

        System.out.print("Enter # of rows: "); row = input.nextInt();
        System.out.print("Enter # of columns: "); columns = input.nextInt();
        System.out.print("Enter symbol to use: "); ans = input.next();

        input.close();

        for(int i=1; i<=row; i++){
            for(int j=1; j<=columns; j++){
                System.out.print(ans+" ");
            }
            System.out.println();
        }
    }
}
