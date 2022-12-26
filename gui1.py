from tkinter import *

window = Tk()
window.geometry('750x230')
window.title('Data diri')
#window.config(bg='grey')

# bagian judul di dalam window
main = Label(
            window,
            text="Data diri",
            font=('helvetica', 24, 'bold'),
            fg='black',
            padx=10,
            pady=10,
            ).grid(row=0, column=0)

# init data
vokab = {
        'Nama' : 'Bara Donta Perdana',
        'NIM'  : 'L200220194',
        'Buku' : 'Isekai wa Smartphone',
        'Idola': 'Gennady Korotkevich',
        'Motto': 'Mencari kemungkinan terburuk untuk menentukan penyelesaian yang terbaik'
        }

"""
'Nama       Bara Donta Perdana',
'NIM        L200220194',
'Buku       Isekai wa Smartphone',
'Idola      Umar bin Khattab',
'Motto      Mencari kemungkinan terburuk untuk menentukan penyelesaian yang terbaik'
"""
"""
txt1 = Label(
            window,
            text='Nama       Bara Donta Perdana\nNIM        L200220194\nBuku       Isekai wa Smartphone\nIdola      Umar bin Khattab\nMotto      Mencari kemungkinan terburuk untuk menentukan penyelesaian yang terbaik',
            font=('helvetica', 12, 'bold'),
            fg='black',
            ).grid(row=1, column=0)

"""
# menggunakan perulangan untuk mengeluarkan setiap isi didalam dict
x, y = int(0), int(1)
for key in vokab:
    txt1 = Label(
            window,
            text=key,
            font=('helvetica', 12),
            fg='black',
            padx=10,
            ).grid(row=y, column=x, sticky=W)
    txt2 = Label(
            window,
            text=vokab[key],
            font=('helvetica', 12),
            fg='black',
            padx=10,
            compound=LEFT
            ).grid(row=y, column=x+1, sticky=W)
    y += 1

tombol = Button(window,
            text='Keluar',
            font=('helvetica', 12),
            fg='black',
            command=window.quit,
            padx=10,
            ).grid(row=y, column=x, pady=10)

window.mainloop()
