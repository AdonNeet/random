public class Car {
    private String make; 
    private String model;
    private int year;
    

    Car(String make, String model, int year){
        this.make = make; this.model = model; this.year = year;
    }

    Car(Car x){
        this.copy(x);
    }

    public String getMake(){ // to make it can return a private string
        return make;
    }


    public String getModel(){ // to make it can return a private string
        return model;
    }

    public int getYear(){ // to make it can return a private val
        return year;
    }


    public void setMake(String make){ // to add change in private var
        this.make = make;
    }

    public void setModel(String model){ // to add change in private var
        this.model = model;
    }

    public void setYear(int year){ // to add change in private var
        this.year = year;
    }

    public void copy(Car x){
        this.setMake(x.getMake());
        this.setModel(x.getModel());
        this.setYear(x.getYear());
    }
}
