public class Roti {
    String tipe = "tidak ada";
    String rasa = "tidak ada";
    String isi = "tidak ada";
    String toping = "tidak ada";
    

    Roti(String tipe, String rasa, String isi, String toping){
        this.tipe = tipe;
        this.rasa = rasa;
        this.isi = isi;
        this.toping = toping;
    }

    Roti(String tipe, String rasa, String isi){ // tanpa toping
        this.tipe = tipe;
        this.rasa = rasa;
        this.isi = isi;
    }

    Roti(String tipe, String rasa){ // tanpa isian
        this.tipe = tipe;
        this.rasa = rasa;
    }

    Roti(String tipe){ // tanpa rasa
        this.tipe = tipe;
    }

    Roti(){ // tanpa apapun
    }
}
