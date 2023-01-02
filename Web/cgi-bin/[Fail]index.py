dict = (
        "Nama : Bara Donta Perdana",
        "Alamat tinggal : Karangbener, Bae, Kudus",
        "Tempat, tanggal lahir : Kudus, 10 Februari 2005",
        "Tempat wisata favorit : Ke gunung sambil naik sepeda",
        "Motto : Mencari kemungkinan terburuk untuk menentukan penyelesaian yang terbaik"
        )

print("<!DOCTYPE html>")
print("<html>")
print("<head>")
print("<title>localServer_CGI</title></head>")
print("<body>")
print("<h3>Data Diri</h3>")
x = int(0)
for i in dict:
    if x == int(0):
        print("<p>"+i+"<br>")
        x+=1
    else:
        print(i+"<br>")
print("</p>")
print("</body")
print("</html>")        #indentansi problem