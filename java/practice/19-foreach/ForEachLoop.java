

public class ForEachLoop {
    /*
     * for-each = traversing technique to iterate througe the elements in an array/collection
     * less steps, more readable, less flexible
     */

    public static void main(String[] args){
        String[] hewan = {"kucing", "anjing", "tikus", "burung"};

        System.out.println("Berikut adalah hewan yang terdapat pada data");
        for(String i : hewan){
            System.out.println(i);
        }
    }
}
