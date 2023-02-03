public class InheritCase{
    /*
     *  Inheritance = the process where one class aquires,
     *                the attributes and methods of another
     */
    public static void main(String[] args){
        Mobil mobil = new Mobil(); Sepeda sepeda = new Sepeda();

        mobil.go(); sepeda.stop();

        Cout.cetakln(mobil.pintu); Cout.cetakln(sepeda.roda);
    }
}