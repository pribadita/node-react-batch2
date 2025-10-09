console.log("LET+CONST")

let name = "John"

if(true){
    let name = "doe"
    console.log(name)

}
console.log(name)

function hello(){
    console.log("Hello")
}

var halo = function(){
    console.log("halo")
}

var sayHello = () => {
    console.log("Hello World")
}


hello()
halo()
sayHello()

//"Template Literal"
var hobi = "Badminton"
var nama = "Steve"

console.log("Template Literal")
console.log("selamat datang "+name)
console.log(`Selamat Datang ${name}`)

console.log(`Halo, Perkenalkan nama saya ${nama}, hobi saya ${hobi}`)
console.log("Halo, Perkenalkan nama saya "+nama+", hobi saya "+hobi)



let orang = {
    nama,
    umur: 27
}

console.log(orang)



var number = [5,4,3,9,6,7]

let [num1, , , num4, num5, num6] = number 

console.log()


let car = {
    brand : "Toyota",
    type: "avanza",
    color: "Silver"
}

let brandName = car.brand
let tipe = car.type
let warna = car.warna


let {brand, type, color} = car

console.log(color)


let footballers = ["Mbappe", "Messi", "Ronaldo"]


let [Mbappe, ...pemainbola] = footballers

// console.log(ronaldo)
// console.log(restFootbalers)


console.log(pemainbola)

// footballers.unshift("Bambang")
pemainbola = [...pemainbola, "Drogba", "Bambang", ]

console.log(pemainbola)