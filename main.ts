function decode(recchaine: string): string {
    let dec: number;
    let c: number;
    let p: number;
    let test: number;
    let binchaine = ""
    for (let i of _py.py_string_split(recchaine, ";")) {
        dec = parseInt(i)
        c = 0
        for (let q = 0; q < 5; q++) {
            p = 2 ** (4 - q)
            test = dec - p
            if (test >= 0) {
                binchaine = binchaine + "1"
                dec = test
            } else if (test <= 0) {
                binchaine = binchaine + "0"
            }
            
        }
        binchaine = binchaine + ";"
    }
    binchaine = binchaine.slice(0, -1)
    return binchaine
}

radio.onReceivedString(function on_received_string(receivedString: string) {
    let a = 0
    let o = 0
    basic.clearScreen()
    let newbinchaine = decode(receivedString)
    for (let i of _py.py_string_split(newbinchaine, ";")) {
        for (let j of i) {
            if (j == "1") {
                led.plot(a, o)
            }
            
            a += 1
        }
        a = 0
        o += 1
    }
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let p: number;
    let chaine = "11111;11111;11111;11111;11111"
    let decchaine = ""
    for (let n of _py.py_string_split(chaine, ";")) {
        p = 0
        for (let m = 0; m < 5; m++) {
            if (n[m] == "1") {
                p = p + 2 ** (4 - m)
            }
            
        }
        decchaine = decchaine + ("" + p) + ";"
    }
    decchaine = decchaine.slice(0, -1)
    radio.sendString(decchaine)
})
