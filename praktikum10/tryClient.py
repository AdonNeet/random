import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect((socket.gethosname(), 1234))

msg = s.recv(1024)
print(msg.decode("utf-8"))
