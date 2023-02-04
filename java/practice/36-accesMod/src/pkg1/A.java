package pkg1;
import pkg2.C;
import source.Cout;
//import pkg2.*;

public class A {
    public static void main(String[] args){
        C c = new C();
        Cout.cetakln("Tes");
        Cout.cetak(c.publicMessage);
    }
}
