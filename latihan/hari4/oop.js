class Car{
    constructor(brand, factory){
        this.brand = brand,
        this.factory = factory,
        this.sound = "Honk,,, Honk"
        // this.color = ""
    }

    // get color(){
    //     return this._color
    // }

    // set color(c){
    //     this._color = c
    // }

    present(x){
        return "Hello "+ x +" My factory is "+this.factory
    }

    static hello(){
        return "Hallo"
    }
}

var innovam = new Car ("Innova","Toyota")
console.log(innovam)
console.log(innovam.present("Jhon"))

innovam.warna = "Red"
console.log(innovam)





class Orang{
    constructor(nama, umur){
        this.name = nama
        this.age = umur
    }

    berjalan(){
        return "TAP TAP TAP"
    }
}


class Guru extends Orang{
    constructor(nama){
        super(nama),
        this.school = ""
    }

    berjalan(){
        return "HOP HOP HOP"
    }

    
}


var guru = new Guru("Abidin")
guru.age = 24
guru.school = "SMP 1"

console.log(guru)
console.log(guru.berjalan())

var newOrang = new Orang()
console.log(newOrang.berjalan())