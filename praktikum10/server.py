import socket

# bagian pengaturan socket
hostname = "localhost"
s =socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((hostname, 50003))
s.listen(5)
print("Communication Program About MySelf")

# bagian data terenkripsi dan temporary terdecode
data = ""
tmp = ""

vokabuler = {
        "name"  : "Bara Donta Perdana",
        "nim"   : "L200220194",
        "year"  : "2022",
        "exit"  : "OK"
        }

while(tmp.lower()!='exit'):
    clientsocket, address = s.accept()
    while(tmp.lower()!='exit'):
        data = clientsocket.recv(1024)
        tmp = data.decode("utf-8")
        # bagian menampilkan data yang diminta
        print("Command :", tmp)
        # bagian sistem response server
        if(tmp.lower() in vokabuler):
            msg = vokabuler[tmp]
            clientsocket.send(bytes(msg, "utf-8"))
        else:
            msg = "Sorry, the command is unknown"
            clientsocket.send(bytes(msg, "utf-8"))
        if(tmp.lower()=='exit'):
            print('Mematikan server')
            s.close()
            break
