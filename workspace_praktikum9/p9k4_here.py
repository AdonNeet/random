"""
    Author  : Bara Donta Perdana
    Date    : D12-M12-Y2022
    Note    : run in python terminal or vsc/vscodium (coderunner ext)
"""

import shelve

# membuka rak 'bara'
F = shelve.open('bara')

# menampilkan semua data yang ada di rak key 'main'
for i in F['main']:
    print(i)

# menutup rak
F.close()
