from persegi import *

n = int(10)
ans = luasPersegi(n)
print("<!DOCTYPE html>")
print("""
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bangun Geometri</title>
</head>
<body>
    <div>
        <h1>
            Bangun Geometri
        </h1>
        <p>Nama bangunan : Persegi <br>
        Dimensi (2D/3D) : 2D <br>
        Rumus luas : sisi * sisi <br>
        Sisi : {0} <br>
        Luas : {1}
""").format(str(n), str(ans)) #it didnt work
#print("Sisi : "+str(n)+"<br>")
#print("Luas : "+str(ans))
print("""
        </p>
    </div>
</body>
</html>

""")
print("</p></body></html>")
