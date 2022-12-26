from tkinter import Tk, N, S, W, E, BOTH, Text, Frame,Label, Button,Checkbutton, IntVar,Entry


class Example(Frame):

    def __init__(self, parent):
        Frame.__init__(self, parent)   
        self.parent = parent
        self.initUI()

    def initUI(self):      
        self.parent.title("Windows")


        Label(text="Contact List").grid(row=0,column=0,columnspan=2)
        Text(width=30,height=15).grid(row=1,rowspan=9, column=0,columnspan=2,padx=20)
        Button(text="Display Contact").grid(row=10, column=0,columnspan=2,pady=10)
        Label(text="Last Name:").grid(row=11, column=0,pady=10)
        Entry().grid(row=11,column=1)
        Button(text="Search").grid(row=12,column=0,columnspan=2)



        Label(text="New Contact").grid(row=0,column=2,columnspan=2)
        Label(text="First Name:").grid(row=1,column=2,sticky=E)
        Entry().grid(row=1,column=3)
        Label(text="Last Name:").grid(row=2,column=2,sticky=E)
        Entry().grid(row=2,column=3)
        Label(text="Phone #:").grid(row=3,column=2,sticky=E)
        Entry().grid(row=3,column=3)
        friend_check = IntVar()
        Checkbutton(variable=friend_check, command = self.friend_box, text = "Friend").grid(row=4,column=3,sticky=W)
        #Label(text="Friend").grid(row=4,column=3,padx=20,sticky=W)
        Label(text="Email:").grid(row=5,column=2,sticky=E)
        Entry().grid(row=5,column=3)
        Label(text="Birthday:").grid(row=6,column=2,sticky=E)
        Entry().grid(row=6,column=3)
        Button(text="Add Contact").grid(row=7,column=3,sticky=E)

    def friend_box(self):
        if friend_check.get() == 1:
            print('1')
        else:
            print('0')


def main():

    root = Tk()
    root.geometry("600x450+900+300")
    root.resizable(0,0)
    app = Example(root)
    root.mainloop()  


if __name__ == '__main__':
    main() 