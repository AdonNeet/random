import java.util.ArrayList;

public class XYarrList {
    public static void main(String[] args){
        ArrayList<ArrayList<String>> toko = new ArrayList<ArrayList<String>>(); // to make list inside lisr

        ArrayList<String> roti = new ArrayList<String>();
        roti.add("roti tawar"); roti.add("roti gandum"); roti.add("roti hitam");

        ArrayList<String> minuman = new ArrayList<String>();
        minuman.add("aqua"); minuman.add("le mineral"); minuman.add("teh kotak");

        ArrayList<String> permen = new ArrayList<String>();
        permen.add("kopiko"); permen.add("mentos"); permen.add("blaster");

        toko.add(roti); toko.add(minuman); toko.add(permen);

        System.out.println(toko); // list inside list

        // mendapatkan jenis roti (indeks 0) pada indeks ke 2

        System.out.println("\ntampilkan indeks x = 0 dan y = 2, model struktur data [x][y]");
        System.out.println(toko.get(0).get(2));
    }
}
