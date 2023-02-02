public class StaticKey{
    /*
     *  static = modifier. A single copy of a variable/method is created and shared.
     *           the class "owns" the statistic member
     */

    public static void main(String[] args){
        Teman teman1 = new Teman("Shinomiya");
        Teman teman2 = new Teman("Shinon");
        Teman teman3 = new Teman("Maple");

        Teman.jumlahTeman();
        Teman[] kontak = {teman1,teman2,teman3};

        Cout.cetakln("Berikut adalah nama teman yang sudah kamu data:");

        for(Teman i: kontak){
            Cout.cetakln(" - "+i.name);
        }
    }
}