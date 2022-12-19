import socket 

# init socket
hostname = "localhost"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((hostname, 1234))

# var pesan yang akan dikirim ke server
msg = ""
tmp = ""

#  function penampil menu
def menu():
    print('Berikut adalah beberapa contoh penggunaan server ini:')
    print('     machine     : menampilkan nama machine')
    print('     release     : menampilkan releases')
    print('     system      : menampilkan nama system')
    print('     version     : menampilkan version')
    print('     node        : menampilkan nama node')
    print('     menu        : menampilkan menu')
    print('     quit        : keluar dari server')

print('Selamat datang di server p10k2')
menu()

# bagian untuk mengirim dan menerima data ke dan dari server
while(msg.lower()!='quit'):
    msg = input('Perintah : ')
    if(msg.lower()=='menu'):
        menu()
        continue
    s.send(bytes(msg, 'utf-8'))
    if(msg.lower()=='quit'):
        react = s.recv(1024)
        tmp = react.decode('utf-8')
        print('Jawaban :', tmp)
        s.close()
        break
    elif(msg.lower()!='exit'):
        react = s.recv(1024)
        tmp = react.decode('utf-8')
        print('Jawaban :', tmp)