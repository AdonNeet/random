import socket 

# init socket
hostname = "localhost"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((hostname, 1234))

# var pesan yang akan dikirim ke server
msg = ""
tmp = ""

print('Selamat datang di server p10k1')

# bagian untuk mengirim dan menerima data ke dan dari server
while(msg.lower()!='exit'):
    msg = input('Perintah : ')
    s.send(bytes(msg, 'utf-8'))
    if(msg.lower()=='exit'):
        react = s.recv(1024)
        tmp = react.decode('utf-8')
        print('Jawaban :', tmp)
        s.close()
        break
    elif(msg.lower()!='exit'):
        react = s.recv(1024)
        tmp = react.decode('utf-8')
        print('Jawaban :', tmp)