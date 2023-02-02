import java.util.Scanner;

public class arrXY {
    public static void main(String[] args){
        // 2D array.... like a table or X-Y cordinate

        String[][] data = new String[3][3]; // 9 cell, 3 column with 3 row each column

        Scanner input = new Scanner(System.in);

        for(int row = 0; row < 3; row++){
            if(row == 0){
                System.out.println("Baris ke-1, masukkan data tentang makanan...");
            }else if(row == 1){
                System.out.println("Baris ke-2, masukkan data tentang minuman...");
            }else{
                System.out.println("Baris ke-1, masukkan data tentang kudapan...");
            }    

            for(int col = 0; col < 3; col++){
                System.out.print("Kolom ke "+row+": "); data[row][col] = input.nextLine();
            }
        }

        input.close();
        System.out.println();
        System.out.println("Berikut adalah data yang sudah dimasukkan (horizonat list)...");

        for(int row = 0; row < 3; row++){
            for(int col = 0; col < 3; col++){
                System.out.print(data[row][col]+" ");
            }
            System.out.println();
        }

        System.out.println();
        System.out.println("Berikut ditampilkan secara excel (vertical list)...");
        for(int col = 0; col < 3; col++){
            for(int row = 0; row < 3; row++){
                System.out.print(data[row][col]+" ");
            }
            System.out.println();
        }
    }
}
