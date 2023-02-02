import java.util.Random;

public class Dice {
    int num;
    Random rand;

    Dice(){
        Random temp = new Random();
        this.rand = temp;   // to register it in global scope var 

        Cout.cetakln("Hasil kocokan pertama");
        roll(temp, this.num);   // it use a local scope
    }

    void roll(Random rand, int num){
        num = rand.nextInt(11)+1;
        Cout.cetakln("angka yang dihasilkan: "+num+"\n");
    }
}
