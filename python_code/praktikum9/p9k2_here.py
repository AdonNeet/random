"""
    Author  : Bara Donta Perdana
    Date    : D12-M12-Y2022
    Note    : run in python terminal or vsc/vscodium (coderunner ext)
"""

# overwrite data baru ke dalam berkas
berkas = open('L200220194', 'w')
berkas.write('L200220194\n')
berkas.write('Kudus, 10/02/2005\n')
berkas.write('Bara Donta Perdana\n')
berkas.close()

# membaca dan menampilkan isi berkas 
berkas = open('L200220194', 'r')
nim = berkas.readline()
tgl = berkas.readline()
nama = berkas.readline()
print(nama+tgl+nim)
berkas.close()  