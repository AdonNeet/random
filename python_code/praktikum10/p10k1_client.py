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
    print('     nama     : menampilkan nama machine')
    print('     nim      : menampilkan releases')
    print('     tahun    : menampilkan nama system')
    print('     menu     : menampilkan menu')
    print('     keluar   : keluar dari server')

print('Selamat datang di server p10k1')
menu()

# bagian untuk mengirim dan menerima data ke dan dari server
while(msg.lower()!='keluar'):
    msg = input('Perintah : ')
    if(msg.lower()=='menu'):
        menu()
        continue
    s.send(bytes(msg, 'utf-8'))
    if(msg.lower()=='keluar'):
        react = s.recv(1024)
        tmp = react.decode('utf-8')
        print('Jawaban :', tmp)
        s.close()
        break
    elif(msg.lower()!='keluar'):
        react = s.recv(1024)
        tmp = react.decode('utf-8')
        print('Jawaban :', tmp)