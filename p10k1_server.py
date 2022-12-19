import socket 

# init socket
hostname = "localhost"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((hostname, 1234))
s.listen(5)
print("Program server tentang data diri")

# bagian data terenkripsi dan tmp data
data = ""
tmp = ""

vokab = {
        "nama"  : "Bara Donta Perdana",
        "nim"   : "L20020194",
        "tahun"  : "2022",
        "keluar"  : "Ok, keluar dari server"
        }

while(tmp.lower()!='keluar'):
    clientsocket, addres = s.accept()
    while(tmp.lower()!='keluar'):
        data = clientsocket.recv(1024)
        # bagian parsing 
        tmp =  data.decode('utf-8')
        # menampilkan data yang diminta
        print('Perintah :', tmp)
        #bagian sistem respon
        if(tmp.lower() in vokab):
            msg = vokab[tmp]
            clientsocket.send(bytes(msg, 'utf-8'))
        else:
            msg = 'Maaf, perintah yang anda masukkan tidak diketahui'
            clientsocket.send(bytes(msg, 'utf-8'))
        # bagian sistem server mematikan diri 
        if(tmp.lower()=='keluar'):
            print('Mematikan server')
            s.close()
            break