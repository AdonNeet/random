public class OverloadConst{
    /*
     *  overloaded constructors = multiple constructors within a class with the same name
     *                            but have different parameters
     *                            name + parameters = signatue
     */

    public static void main(String[] args){
        Roti roti1 = new Roti("tawar", "cokelat", "pisang", "keju");
        Cout.cetakln("Berikut adalah informasi tentang roti1");
        Cout.cetakln("tipe: "+roti1.tipe);
        Cout.cetakln("rasa: "+roti1.rasa);
        Cout.cetakln("isi: "+roti1.isi);
        Cout.cetakln("toping: "+roti1.toping);

        Cout.cetakln("");

        Roti roti2 = new Roti("tawar", "keju", "krim");
        Cout.cetakln("Berikut adalah informasi tentang roti2");
        Cout.cetakln("tipe: "+roti2.tipe);
        Cout.cetakln("rasa: "+roti2.rasa);
        Cout.cetakln("isi: "+roti2.isi);
        Cout.cetakln("toping: "+roti2.toping);

        Cout.cetakln("");

        Roti roti3 = new Roti("hitam", "vanilla", "keju");
        Cout.cetakln("Berikut adalah informasi tentang roti3");
        Cout.cetakln("tipe: "+roti3.tipe);
        Cout.cetakln("rasa: "+roti3.rasa);
        Cout.cetakln("isi: "+roti3.isi);
        Cout.cetakln("toping: "+roti3.toping);

        Cout.cetakln("");

        Roti roti4 = new Roti("putih", "keju");
        Cout.cetakln("Berikut adalah informasi tentang roti4");
        Cout.cetakln("tipe: "+roti4.tipe);
        Cout.cetakln("rasa: "+roti4.rasa);
        Cout.cetakln("isi: "+roti4.isi);
        Cout.cetakln("toping: "+roti4.toping);

        Cout.cetakln("");

        Roti roti5 = new Roti("putih");
        Cout.cetakln("Berikut adalah informasi tentang roti5");
        Cout.cetakln("tipe: "+roti5.tipe);
        Cout.cetakln("rasa: "+roti5.rasa);
        Cout.cetakln("isi: "+roti5.isi);
        Cout.cetakln("toping: "+roti5.toping);

        Cout.cetakln("");

        Roti roti6 = new Roti();
        Cout.cetakln("Berikut adalah informasi tentang roti6");
        Cout.cetakln("tipe: "+roti6.tipe);
        Cout.cetakln("rasa: "+roti6.rasa);
        Cout.cetakln("isi: "+roti6.isi);
        Cout.cetakln("toping: "+roti6.toping);
    }   
}