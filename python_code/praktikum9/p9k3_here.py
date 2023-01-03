"""
    Author  : Bara Donta Perdana
    Date    : D12-M12-Y2022
    Note    : run in python terminal or vsc/vscodium (coderunner ext)
"""

import shelve

# membuka rak penyimpanan baru, 'bara'
F = shelve.open('bara')

# membuka berkas yang telah dibuat
berkas = open('L200220194', 'r')

# mendata masing-masing data
temp = [berkas.readline(), berkas.readline(), berkas.readline()]

# menutup berkas
berkas.close()

# menghilangkan endline dan mendatanya ke dalam rak key 'main'
for i in range(0,len(temp)):
    temp2 = temp[i].strip('\n')         # menghilangkan endline
    if(i == 0):
        F['main'] = [temp2]
    else:
        F['main'] += [temp2]

# menutup rak
F.close()