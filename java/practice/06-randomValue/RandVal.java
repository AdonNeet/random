import java.util.Random;

public class RandVal {
    public static void main(String[] args){
        Random random =  new Random();
        
        int x = random.nextInt(9)+1; 
        // it will generate from 0-10, to not make it zero add 1 and make it the ten into nine
        double y = random.nextDouble(4)+1;
        boolean z = random.nextBoolean();
        

        System.out.println(x); System.out.println(y); System.out.println(z);
    }
}
