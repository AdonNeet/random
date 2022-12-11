# Author menggunakan windows
# C:/Users/[User Name]/AppData/Local/Programs/Python/Python311

berkas = open("L200220194", "w")
berkas.write('L200220194\n')
berkas.write('Kudus, 10/02/2005\n')
berkas.write('Bara Donta Perdana\n')
berkas.close()

berkas = open("L200220194", "r")
print(berkas.read())
berkas.close()