"""
    Author  : Bara Donta Perdana
    Date    : D26-M12-Y2022
    Note    : run in python terminal or vsc/vscodium
"""

from tkinter import *

window = Tk()
window.title('Kalkulator')
window.geometry('250x180')

# bagian label samping entry
Label(window, text='Angka 1', font=('Helvetica', 12), fg='black').place(x=10,y=15)
Label(window, text='Angka 2', font=('Helvetica', 12), fg='black').place(x=10,y=55)
inp1 = Entry(window)
inp2 = Entry(window)
inp1.place(x=80,y=15)
inp2.place(x=80,y=55)

# init var
ans = None

# bagian method
def show():
    global hasil, ans
    hasil.destroy()
    hasil = Label(window, text=ans, font=('Helvetica', 12), fg='black')
    hasil.place(x=70,y=145) # grid config dipisah agar bisa di destroy

def tambah():
    global ans
    ans = int(inp1.get()) + int(inp2.get())
    show()
        
def kurang():
    global ans
    ans = int(inp1.get()) - int(inp2.get())
    show()

def kali():
    global ans
    ans = int(inp1.get()) * int(inp2.get())
    show()

def bagi():
    global ans
    ans = int(inp1.get()) / int(inp2.get())
    show()

# bagian tombol
tx, ty = int(30), int(95)
Button(window,text='+',font=('helvetica', 12),fg='black',command=tambah,padx=10, relief=RAISED).place(x=tx+(50*0),y=ty)
Button(window,text='-',font=('helvetica', 12),fg='black',command=kurang,padx=10, relief=RAISED).place(x=tx+(50*1),y=ty)
Button(window,text='x',font=('helvetica', 12),fg='black',command=kali,padx=10, relief=RAISED).place(x=tx+(50*2),y=ty)
Button(window,text=':',font=('helvetica', 12),fg='black',command=bagi,padx=10,relief=RAISED).place(x=tx+(50*3),y=ty)

# bagian penampil hasil
Label(window, text='Hasil   :', font=('Helvetica', 12), fg='black').place(x=10,y=145)
hasil = Label(window, text=ans, font=('Helvetica', 12), fg='black')
hasil.place(x=70,y=145)

window.mainloop()