import socket

# bagian pengaturan socket
hostname = "localhost"
s =socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((hostname, 50006))
s.listen(5)
print("Communication Program To Find The Square Area")

# bagian data terenkripsi dan temporary terdecode
data = ""
tmp = ["", ""]
sisi = int()
luas = int()


react = {
        "sisi" : "Panjang sisi sudah disimpan",
        "hitung" : "Luas persegi tersebut adalah ",
        "exit" : "Ok!"
        }

while(tmp[0].lower()!='exit'):
    # bagian sistem yang aktif menerima data secara terus menerus
    clientsocket, address = s.accept()
    while(tmp[0].lower()!='exit'):
        data = clientsocket.recv(1024)
        # bagian parsing dan pengelompokan data
        tmp = data.decode("utf-8")
        tmp = ((tmp.replace(" ", "")).lower()).split("=")
        
        # bagian menampilkan data yang diminta
        print("Input :", tmp)

        # bagian sistem response server
        if(tmp[0].lower() in react):
            if(tmp[0].lower()=="sisi"):
                sisi = int(tmp[1])
                msg = react[tmp[0]]
            elif(tmp[0].lower()=="hitung"):
                luas = sisi*sisi
                msg = react[tmp[0]]+str(luas)
            else:
                msg = react[tmp[0]]
            clientsocket.send(bytes(msg, "utf-8"))
        else:
            msg = "Sorry, the command is unknown"
            clientsocket.send(bytes(msg, "utf-8"))

        # bagian sistem mematikan diri
        if(tmp[0]=='exit'):
            print('Mematikan server')
            s.close()
            break