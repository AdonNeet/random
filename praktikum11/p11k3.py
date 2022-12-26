"""
    Author  : Bara Donta Perdana
    Date    : D26-M12-Y2022
    Note    : run in python terminal or vsc/vscodium
"""

from tkinter import *

window = Tk()
window.title('Program Luas Persegi')
window.geometry('580x200')

# bagian label title
Label(window, text='Luas Persegi', font=('Helvetica', 28, 'bold'), fg='black').place(x=10,y=15)
Label(window, text='Ini merupakan program mencari luas persegi. Persegi merupakan sebuah\nbangun yang berdimensi 2 dimensi, contohnya yaitu kertas dan gambar.'
    , font=('Helvetica', 12), fg='black').place(x=10,y=60)

# bagian label samping entry
Label(window, text='Panjang sisi :', font=('Helvetica', 12), fg='black').place(x=10,y=120)
inp1 = Entry(window)
inp1.place(x=110,y=120)


# init var
ans = int(0)
temp = int(0)

# bagian method
def show():
    global hasil, ans
    hasil.destroy()
    hasil = Label(window, text=ans, font=('Helvetica', 12), fg='black')
    hasil.place(x=70,y=160)

def luas():
    global ans
    ans = int(inp1.get()) * int(inp1.get())
    show()

# bagian menampilkan hasil
Label(window, text='Hasil   :', font=('Helvetica', 12), fg='black').place(x=10,y=160)
hasil = Label(window, text=ans, font=('Helvetica', 12), fg='black')
hasil.place(x=70,y=160)

# bagian tombol
Button(window,text='Hitung luas',font=('helvetica', 12),fg='black',command=luas).place(x=280,y=115)

window.mainloop()