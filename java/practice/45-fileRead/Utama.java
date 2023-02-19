import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;


public class Utama{
    /*
     *  FileReader =  read the contents of a file as a stream of char. One by one
     *                read() returns an int value which contains the byte value
     *                when read() returns -1, there is no more data to be read
     */
    public static void main(String[] args) {
        try{
            FileReader reader = new FileReader("seni.txt");
            int data = reader.read(); // do iteration
            while(data != -1){
                cout.cetak((char)data);
                data = reader.read();
            }
            reader.close();
        }
        catch (FileNotFoundException e){
            e.printStackTrace();
        }
        catch (IOException e){
            e.printStackTrace();
        }
    }
}