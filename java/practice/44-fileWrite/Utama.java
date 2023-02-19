import java.io.FileWriter;
import java.io.IOException;

public class Utama {
    public static void main(String[] args) throws IOException{
        
        try{
            FileWriter tulis = new FileWriter("puisi.txt");
            tulis.write("Mawar berwarna biru");
            tulis.append("\nViolet berwarna merah");
            tulis.append("\nAku harus pergi ke toilet");
            tulis.append("\n\n -> Patrick Star");
            tulis.close();
        }
        catch(IOException e){
            e.printStackTrace();
        }
    }
}
