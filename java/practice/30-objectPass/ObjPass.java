public class ObjPass{
    public static void main(String[] args){
        Garage garasi = new Garage();

        Car mobil1 = new Car("Karimun");
        Car mobil2 = new Car("Pajero");

        garasi.park(mobil1); 
        garasi.park(mobil2);
    }
}