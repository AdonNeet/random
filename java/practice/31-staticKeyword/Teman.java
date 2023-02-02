public class Teman {
    String name;
    static int jumlahTeman;

    Teman(String name){
        this.name = name;
        jumlahTeman++;
    }
    // yeah under this comment is overloaded between var and method
    static void jumlahTeman(){
        Cout.cetakln("Jumlah teman kamu berdasarkan kode pemanggilan teman sebanyak "+Teman.jumlahTeman);
    }
}
