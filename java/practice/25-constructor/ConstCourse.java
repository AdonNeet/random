

public class ConstCourse {
    public static void main(String[] args){
        // constructor = special method that is called when an object is instantiated (created)
        // yeah, make define alter but only one args

        Human A = new Human("Adon",18 , 100);

        Cout.cetakln(A.name);
        Cout.cetakln(A.age);
        Cout.cetakln(A.weight);

        Cout.cetakln("");

        Human B = new Human("Neet",30 , 70);

        Cout.cetakln(B.name);
        Cout.cetakln(B.age);
        Cout.cetakln(B.weight);

        Cout.cetakln("");

        A.makan(); B.minum();

    }
}
