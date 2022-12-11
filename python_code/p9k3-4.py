# Author menggunakan windows
# C:/Users/[User Name]/AppData/Local/Programs/Python/Python311
# Mengakses data/objek biner pada berkas dengan Shelve

import shelve 

# bagian def
def remove(a_string, number_to_remove):
    return a_string[number_to_remove:]


# bagian p9k3
# membuat rak data
R = shelve.open("bara")

# membuka berkas L200220194
berkas = open("L200220194", "r")
baca = berkas.read()
berkas.close()

# menyimpan data yang telah dibaca
a = ''; b = ''; c = ''
for i in baca:
    if(i != '.'):
        a += i
        baca = remove(baca, 1)
    else:
        baca = remove(baca, 1)
        break

for i in baca:
    if(i != '.'):
        b += i
        baca = remove(baca, 1)
    else:
        baca = remove(baca, 1)
        break

for i in baca:
    if(i != '.'):
        c += i
        baca = remove(baca, 1)
    else:
        baca = remove(baca, 1)
        break

R['Semua']=[a, b, c]
R.close()

# bagian p9k4
# menampilkan data
R = shelve.open("bara")
for i in R['Semua']:
    print(i)
R.close