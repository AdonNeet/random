import java.util.Scanner;

public class IfStat {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Berapa berat badan tubuhmu? ");
        int weight = input.nextInt();

        input.close();

        if(weight>=70){ // mirip seperti c++ untuk if statement
            System.out.println("Kamu obesitas");
        }else if((weight>=60)&&(weight<70)){
            System.out.println("Kamu memiliki tubuh ideal");    
        }else{
            System.out.println("Kamu kekurangan nutrisi");
        }
    }
}
