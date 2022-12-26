from tkinter import *


window = Tk()

# bagian input angka
Label(window,text='Angka 1',font=('helvetica', 12),fg='black',padx=10, pady=10,).grid(row=0, column=0)
Label(window,text='Angka 2',font=('helvetica', 12),fg='black',padx=10, pady=10,).grid(row=1, column=0)
inp1 = Entry(window)
inp1.grid(row=0, column=1)
inp2 = Entry(window)
inp2.grid(row=1, column=1)

# inti data
ans = int(0)

# bagian method
def show():
    global hasil, ans
    hasil.destroy()
    hasil = Label(window,text=ans,font=('helvetica', 12),fg='black',pady=10)    
    hasil.grid(row=2, column=1, sticky=W)   # grid config dipisah agar bisa di destroy

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
plus = Button(window,
            text='+',
            font=('helvetica', 12),
            fg='black',
            command=tambah,
            padx=10,
            ).grid(row=0, column=2, padx=5)
mins = Button(window,
            text='-',
            font=('helvetica', 12),
            fg='black',
            command=kurang,
            padx=10,
            ).grid(row=0, column=3, padx=5)
multi = Button(window,
            text='x',
            font=('helvetica', 12),
            fg='black',
            command=kali,
            padx=10,
            ).grid(row=1, column=2, padx=5)
div = Button(window,
            text=':',
            font=('helvetica', 12),
            fg='black',
            command=bagi,
            padx=10,
            ).grid(row=1, column=3, padx=5)

# menampilkan hasil
Label(window,text='Hasil :',font=('helvetica', 12),fg='black',padx=5, pady=10,).grid(row=2, column=0, sticky=E)
hasil = Label(window,text=ans,font=('helvetica', 12),fg='black',pady=10)    
hasil.grid(row=2, column=1, sticky=W)   # grid config dipisah agar bisa di destroy

window.mainloop()