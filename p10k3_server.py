import socket 

# init socket
hostname = "localhost"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((hostname, 1234))
s.listen(5)
print("Program server tentang data diri")

# bagian data terenkripsi dan tmp data
data = ""
tmp = ["" * 2]


react = {
        "sisi" : "Panjang sisi sudah disimpan",
        "hitung" : "Luas persegi tersebut adalah ",
        "keluar" : "Ok!"
        }

while(tmp[0].lower()!='keluar'):
    clientsocket, addres = s.accept()
    while(tmp[0].lower()!='keluar'):
        data = clientsocket.recv(1024)
        # bagian parsing dan klasifikasi data
        tmp =  data.decode('utf-8')
        tmp = ((tmp.replace(" ", "")).lower()).split("=")
        # menampilkan data yang diminta
        print('Perintah :', tmp)
        #bagian sistem respon
        if(tmp[0] in react):
            if(tmp[0]=='sisi'):
                sisi = int(tmp[1])
                msg = react[tmp[0]]
            elif(tmp[0]=='hitung'):
                luas = sisi**2
                msg = react[tmp[0]]+str(luas)
            else:
                msg = react[tmp[0]]          
            clientsocket.send(bytes(msg, 'utf-8'))
        else:
            msg = 'Maaf, perintah yang anda masukkan tidak diketahui'
            clientsocket.send(bytes(msg, 'utf-8'))
        # bagian sistem server mematikan diri    
        if(tmp[0].lower()=='keluar'):
            print('Mematikan server')
            s.close()
            break