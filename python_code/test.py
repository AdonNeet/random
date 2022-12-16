latin_dic ={'apple': ['malum', 'pomum', 'popula'], 'fruit': ['baca', 'bacca', 'popum'], 'punishment': ['malum', 'multa']}
new_dict={}

for k,v in latin_dic.items():
    for item in v:
        if item in new_dict:
            new_dict[item].append(k)
        else:
            new_dict[item] = [k]

for k,v in new_dict.items():
    print(k, '-', v)

print('Test di branch baru, yey :D')