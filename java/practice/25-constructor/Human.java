public class Human {

    String name; int age; double weight;

    Human(String name,int age, double weight){ // its called constructor
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    void makan(){
        Cout.cetakln(this.name+" sedang makan");
    }

    void minum(){
        Cout.cetakln(this.name+" sedang minum");
    }
}
