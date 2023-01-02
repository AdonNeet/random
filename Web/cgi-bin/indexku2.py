"""
    Author  : Bara Donta Perdana
    Date    : D2-M1-Y2023
    Note    : http.server
"""

from persegi import *
from random import randint

n = randint(2, 100)
ans = luasPersegi(n)

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
""")
print("Sisi : "+str(n)+"<br>")
print("Luas : "+str(ans))
print("""
        </p>
    </div>
</body>
</html>
""")

