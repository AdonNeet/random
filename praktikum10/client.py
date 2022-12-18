import socket
hostname = "localhost"
msg = ""
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((hostname, 50003))

while(msg.lower() != "exit"):
    msg = input("Command : ")
    s.send(bytes(msg, "utf-8"))
    if(msg.lower() == "exit"):
        response = s.recv(1024)
        temp = response.decode("utf-8")
        print("Answer :", temp)
        s.close()
        break
    elif(msg.lower() != "exit"):
        response = s.recv(1024)
        temp = response.decode("utf-8")
        print("Answer :", temp)
s.close()
