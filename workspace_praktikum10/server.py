import socket
s =socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(("", 50003))
s.listen(5)
print("Communication Program About MySelf")
data =""
vokabuler = {
        "Nama"  : "Bara Donta Perdana",
        "NIM"   : "L200220194",
        "Year"  : "2022",
        "Exit"  : "OK"
        }
data.strip("b'")
while(data.lower()  != "exit"):
    komm, addr = s.accept()
    data.strip("b'")
    while(data.lower()!='exit'):
        data = komm.recv(1024)
        tmp = data.strip("b'")
        if(data.lower()=='exit'):
            s.close()
            break
        print("Command :", data)
        if(data in vokabuler):
            temp = vokabuler[data]
            komm.send(temp)
        else:
            temp = "Sorry, the command is unknown"
            komm.send(temp)
