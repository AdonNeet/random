public class ArrObject{
    public static void main(String[] args){
        //Food[] kulkas = new Food[3];    // it make array of object, manual input

        Food food1 = new Food("Bakso");
        Food food2 = new Food("Nasgor");
        Food food3 = new Food("Naspad");

        // kulkas[0] = food1; kulkas[1] = food2; kulkas[2] = food3; // yep, manual

        // this is more eff
        Food[] kulkas = {food1, food2, food3};

        for(int i = 0; i<3;i++){
            Cout.cetakln(kulkas[i].name);
        }
    }
}