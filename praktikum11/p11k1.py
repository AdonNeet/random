"""
    Author  : Bara Donta Perdana
    Date    : D26-M12-Y2022
    Note    : run in python terminal or vsc/vscodium
"""

from tkinter import *

window = Tk()
window.title('Data diri')

# bagian label judul 
Label(window, text='Data diri', font=('Helvetica', 24, 'bold'), fg='black', padx=10, pady=10).grid(row=0,column=0,sticky=W)

# init data
data = {
        'Nama' : ': Bara Donta Perdana',
        'NIM' : ': L200220194',
        'Buku favorit' : ': Isekai wa Smartphone',
        'Idola di kalangan sahabat' : ': Umar bin Khattab',
        'Motto' : ': Mencari kemungkinan terburuk untuk menentukan penyelesaian yang terbaik'
        }

# menggunakan perulangan untuk menampilkan data diri
x, y = int(0), int(1)
for kunci in data:
    Label(window, text=kunci, font=('Helvetica', 12, 'bold'), fg='black', padx=10, pady=2).grid(row=y,column=x,sticky=W)
    Label(window, text=data[kunci], font=('Helvetica', 12, 'bold'), fg='black', padx=10, pady=2).grid(row=y,column=x+1,sticky=W)
    y += 1

# bagian tombol
Button(window, text='Keluar', font=('Helvetica', 12, 'bold'), fg='black', command=window.quit, padx=10, pady=5, relief=RAISED).grid(row=y,column=x, pady=5)

window.mainloop()