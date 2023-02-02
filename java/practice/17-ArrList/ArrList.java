import java.util.ArrayList;

public class ArrList{
    public static void main(String[] args){
        /*
         * ArrayList = a resizeable array. It like a list in python
         *              Elements can be added and removed after compilation phase
         *              store reference data types
         */

        ArrayList<String> food = new ArrayList<String>();

        food.add("pizza"); food.add("bakso");  food.add("nasgor");

        food.set(0, "naspad"); // to replace into a new data (index, string)

        for(int i=0; i<food.size();i++){
            System.out.println(food.get(i));
        }

        food.remove(1);
        System.out.println("\nsetelah menghilangkan indeks ke 1");

        for(int i=0; i<food.size();i++){
            System.out.println(food.get(i));
        }

        food.clear();
        food.add("tahu petis"); food.add("tahu bakso"); food.add("tahu isi");

        System.out.println("\nsetelah menghilangkan keseluruhan isi dan menambah isi baru pada arr food");
        for(int i=0; i<food.size();i++){
            System.out.println(food.get(i));
        }
    }
}