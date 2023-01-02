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
        <h2>Bangun Geometri</h2>
        <p>Nama bangunan : Persegi <br>
        Dimensi (2D/3D) : 2D <br>
        Rumus luas : sisi * sisi <br>
""")
print("Sisi : "+str(n)+"<br>")
print("Luas : "+str(ans)+"<br>")
print("""
        </p>
    </div>
</body>
</html>

""")
print("</p></body></html>")
