# Author menggunakan windows
# C:/Users/[User Name]/AppData/Local/Programs/Python/Python311
# Mengakses data/objek biner pada berkas dengan Shelve

import shelve 

# bagian p9k3
# membuat rak data
R = shelve.open("bara")

# membuka berkas L200220194
berkas = open("L200220194", "r")
temp = [berkas.readline(), berkas.readline(), berkas.readline()]
#print(temp)
berkas.close()

# menyimpan setiap data yang telah dibaca
for i in range(0,3):
    temp2 = temp[i].strip('\n')         # menghilangkan endline
    if(i == 0):
        R['Semua'] = [temp2]
    else:
        R['Semua'] += [temp2]
R.close()
# bagian p9k3 selesai

# bagian p9k4
# menampilkan data
R = shelve.open("bara")
print(R['Semua'])
for i in R['Semua']:
    print(i)
R.close
# bagian p9kp selesai