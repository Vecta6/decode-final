def decode(recchaine):
    binchaine=""
    for i in recchaine.split(";"):
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
    binchaine=binchaine[0:-1]
    return binchaine

def encode(senchaine):
    decchaine=""
    for n in senchaine.split(";"):
        p=0
        for m in range(0, 5):
            if n[m]=="1":
                p=p+(2**(4-m))
        decchaine=decchaine+str(p)+";"
    decchaine=decchaine[0:-1]
    return decchaine

def on_received_string(receivedString):
    a=0
    o=0
    basic.clear_screen()
    newbinchaine=decode(receivedString)
    for i in newbinchaine.split(";"):
        for j in i:
            if j == "1":
                led.plot(a, o)
            a += 1
        a = 0
        o += 1
radio.on_received_string(on_received_string)


def on_button_pressed_a():
    chaine=encode("01010;11111;11111;01110;00100")
    radio.send_string(chaine)
input.on_button_pressed(Button.A, on_button_pressed_a)
