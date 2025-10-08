console.log("CONTOH 1")
function tampilkan(){
    console.log("hello")
}
tampilkan()

console.log("CONTOH 2")
function tampilkanAngka(){
    return 2
}

var tampung = tampilkanAngka()
console.log(tampung)


console.log("CONTOH 3")
function kalikanDua(angka){
    return angka * 2
}

var simpan = kalikanDua(2)
console.log(simpan)

console.log("CONTOH 4")
function perkalian(angka1, angka2=5){
    return angka1 * angka2
}

var simpan = perkalian(2)
console.log(simpan)

console.log("ANONYM FUNCTION")
var perkalian = function(angka1, angka2){
    return angka1 * angka2
}

console.log(perkalian(2,3))


console.log("Tugas Function No2")
var text = "Super Bootcamp Fullstack Dev 2022"
var txtToLower = text.toLocaleLowerCase()
var txtClean = txtToLower.replaceAll(" ","")

function cekChar(txtClean){
    var result = ""
    for(var i = 0; i<txtClean.length;i++){
        var char = txtClean[i]

        if(txtClean.indexOf(char) === txtClean.lastIndexOf(char)){
            result += char
        }
    }
    return result
}

console.log(cekChar(txtClean))