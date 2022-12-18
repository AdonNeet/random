import socket
s =socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(("", 50004))
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
while(data.lower()  != "Exit"):
    komm, addr = s.accept()
    while(data.lower() != "Exit"):
        data = komm.recv(1024)
        if(data.lower() == "Exit"):
            s.close()
            break
        print("Command :", data)
        if(data in vokabuler):
            komm.send(vokabuler[data])
        else:
            txt = "Sorry, the command is unknown"
            komm.send(txt.encode('ascii'))
