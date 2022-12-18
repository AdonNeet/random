import socket
hostname = "localhost"
msg = ""
input = raw_input
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((hostname, 50003))
while(msg.lower() != "exit"):
    msg = input("Command : ")
    s.send(msg)
    if(msg.lower() == "exit"):
        s.close()
        break
    elif(msg.lower() != "exit"):
        response = s.recv(1024)
        print("Answer :", response)
s.close()
