var myCar = {
    brand: "Toyota",
    type: "Sport Car",
    price: 50000000,
    "horse power" : 986
}

    console.log(myCar["brand"])
    console.log(myCar.brand)
    console.log(myCar["horse power"])


var car = [
    {merk: "BMW", warna: "Merah", tipe:"Sedan"},
    {merk: "TOYOTA", warna: "Biru", tipe:"Family"},
    {merk: "AUDI", warna: "Perak", tipe:"Sedan"},
]

console.log(car[2].merk)

for(i=0;i<car.length;i++){
    console.log((i+1) +". " +car[i].merk)
}
console.log("FOREACH")
car.forEach(function(item, index){
    console.log((index+1) + ". "+item.merk)
})

console.log("FOREACH ARROW")
car.forEach((item, index) => {
    console.log((index+1) + ". "+item.merk)
})


console.log("MAP")
var arrMerk = car.map(function(item){
    return item.warna
})

console.log(arrMerk)

console.log("filter")
var carFilter = car.filter(function(item){
    return item.tipe != "Sedan"
})

console.log(carFilter)
