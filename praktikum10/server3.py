import platform

hostname = "localhost"
s =socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((hostname, 50005))
s.listen(5)
print("Communication Program To Find The Square Area")
data = ""
tmp = ""