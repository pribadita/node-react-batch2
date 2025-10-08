console.log("ARRAY")
var angka = [2,5,6,1,3]

console.log(angka)
console.log(angka[1])
console.log(angka[4])

console.log("LENGTH")
console.log(angka.length)
console.log(angka)

console.log("PUSH")
angka.push(10)
console.log(angka)

console.log("POP")
angka.pop()
console.log(angka)

console.log("unshift")
angka.unshift(10)
console.log(angka)

console.log("shift")
angka.shift()
console.log(angka)

console.log("JOIN")
// angka.shift()
console.log(angka.join(" "))

console.log("SPLIT")
var footballers = "Mbappe Messi Ronaldo Neymar"
console.log(footballers)
var arrFootbalers = footballers.split(" ")
console.log(arrFootbalers)
console.log(arrFootbalers[2])

console.log("SORT")
console.log(arrFootbalers)
console.log(arrFootbalers.sort())

console.log(angka)
console.log(angka.sort())

console.log("SLICE")
console.log(arrFootbalers)
console.log(arrFootbalers.slice(1,3))

console.log("SPLICE")
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)

console.log("LOOPING")
console.log("LOOPING FOR")

for(var i = 0; i < fruits.length; i++){
    console.log("Buah ke-" + (i+1) +" adalah "+fruits[i])
}

console.log("LOOPING WHILE")

var i = 0
while(i < fruits.length){
    console.log("Buah ke-" + (i+1) +" adalah "+fruits[i])
    i++
}