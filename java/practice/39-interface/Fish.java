public class Fish implements Prey,Predator {
    @Override
    public void hunt(){
        Cout.cetakln("Ikan ini sedang berburu");
    }

    @Override
    public void flee(){
        Cout.cetakln("Ikan ini sudah kabur");
    }
}
