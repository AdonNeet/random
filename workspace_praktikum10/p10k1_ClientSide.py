import socket
hostname = "localhost"
msg = ""
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((hostname, 50004))
while(msg.lower() != "Exit"):
    msg = input("Command : ")
    msg = msg.encode('ascii')
    s.send(msg)
    if(msg.lower() == "Exit"):
        s.close()
        break
    elif(msg.lower() != "Exit"):
        response = s.recv(1024)
        print("Answer :", response)
s.close()
