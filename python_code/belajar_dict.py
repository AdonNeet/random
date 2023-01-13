tmp = [{},{},{}]

tmp[0]['New']="tes"
tmp[1]['New']="in"
tmp[2]['New']="dict"
print(tmp)

tmp += {}       # menambahkan kelompok baru
tmp.append({})
tmp[3]['New']="appended"
print(tmp)