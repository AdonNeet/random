import java.io.File;
import java.io.IOException;


public class Utama {
    public static void main(String[] args) throws IOException{
        // file = An abstract representation of file and dir pathname
        String name = "PesanRahasia.txt";

        File file = new File(name);

        if(file.exists()){
            cout.cetakln("Filenya sudah ada, dicek kemudian di hapus");
            cout.cetakln(file.getPath());
            cout.cetakln(file.getAbsolutePath());
            cout.cetakln("Merupakan file: "+file.isFile());
            cout.cetakln("Kondisi: "+file.delete());
        } else {
            cout.cetakln("File itu belum ada, akan ditambahkan yang baru");
            if(file.createNewFile()){
                cout.cetakln("File berhasil dibuat");
            }
        }

    }
}