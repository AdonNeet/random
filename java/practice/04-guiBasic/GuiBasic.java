import javax.swing.JOptionPane;

public class GuiBasic {
    public static void main(String[] args){
        String name = JOptionPane.showInputDialog("Masukkan nama kamu");
        JOptionPane.showMessageDialog(null, "Hello "+name);

        // for take a int or double input must use parse for each input...
        int age =  Integer.parseInt(JOptionPane.showInputDialog("Masukkan umur kamu"));
        double height = Double.parseDouble(JOptionPane.showInputDialog("Masukkan tinggi kamu"));
        JOptionPane.showMessageDialog(null, "Umur kamu "+age+"\nTinggi kamu "+height);
    }
}
