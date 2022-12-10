let dec: number;
let c: number;
let p: number;
let test: number;
let chaine = "10;31;31;14;4"
let binchaine = ""
for (let i of _py.py_string_split(chaine, ";")) {
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
basic.showString(binchaine)
