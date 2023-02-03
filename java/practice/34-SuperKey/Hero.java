public class Hero extends Person{ // dont forget to extends from superclass
    String power;

    Hero(String name, int age, String power){
        super(name, age);
        this.power = power;
    }

    void desc(){
        Cout.cetakln("Nama : "+this.name);
        Cout.cetakln("Umur : "+this.age);
        Cout.cetakln("Kekuatan : "+this.power);
    }

    public String toString(){
        return super.toString()+"\n"+this.power;
    }
}
