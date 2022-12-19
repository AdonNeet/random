import socket
import platform

# bagian pengaturan socket
hostname = "localhost"
s =socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((hostname, 50004))
s.listen(5)
print("Communication Program About My Platform")

# bagian data terenkripsi dan temporary terdecode
data = ""
tmp = ""

react = {
        "machine" : platform.machine(),
        "release" : platform.release(),
        "system" : platform.system(),
        "version" : platform.version(),
        "node" : platform.node(),
        "exit" : 'Ok!'
        }


while(tmp.lower()!='exit'):
    # bagian sistem yang aktif menerima data secara terus menerus
    clientsocket, address = s.accept()
    while(tmp.lower()!='exit'):
        data = clientsocket.recv(1024)
        tmp = data.decode("utf-8")
        # bagian menampilkan data yang diminta
        print("Command :", tmp)

        # bagian sistem response server
        if(tmp.lower() in react):
            msg = react[tmp]
            clientsocket.send(bytes(msg, "utf-8"))
        else:
            msg = "Sorry, the command is unknown"
            clientsocket.send(bytes(msg, "utf-8"))

        # bagian sistem mematikan diri
        if(tmp.lower()=='exit'):
            print('Mematikan server')
            s.close()
            break
        
