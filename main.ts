let a = 0
let o = 0
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
    let chaine = "10;31;31;14;4"
    radio.sendString(chaine)
})
