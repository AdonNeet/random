import socket 
import platform

# init socket
hostname = "localhost"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((hostname, 1234))
s.listen(5)
print("Program server tentang platform server")

# bagian data terenkripsi dan tmp data
data = ""
tmp = ""

react = {
        "machine"  : platform.machine(),
        "release"   : platform.release(),
        "system"  : platform.system(),
        "version"  : platform.version(),
        "node" : platform.node(),
        "quit" : "Ok, keluar dari server"
        }

while(tmp.lower()!='quit'):
    clientsocket, addres = s.accept()
    while(tmp.lower()!='quit'):
        data = clientsocket.recv(1024)
        # bagian parsing 
        tmp =  data.decode('utf-8')
        # menampilkan data yang diminta
        print('Perintah :', tmp)
        #bagian sistem respon
        if(tmp.lower() in react):
            msg = react[tmp]
            clientsocket.send(bytes(msg, 'utf-8'))
        else:
            msg = 'Maaf, perintah yang anda masukkan tidak diketahui'
            clientsocket.send(bytes(msg, 'utf-8'))
        # bagian sistem server mematikan diri 
        if(tmp.lower()=='quit'):
            print('Mematikan server')
            s.close()
            break