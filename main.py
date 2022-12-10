chaine="10;31;31;14;4"

binchaine=""
for i in chaine.split(";"):
    dec=int(i)
    c=0
    for q in range(0, 5):
        p=(2**(4-q))
        test=dec-p
        if test>=0:
            binchaine=binchaine+"1"
            dec=test
        elif test<=0:
            binchaine=binchaine+"0"
    binchaine=binchaine+";"
    
basic.show_string(binchaine)