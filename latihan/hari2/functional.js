console.log("Recursive")

function countDown(number){
    console.log(number)

    var newNumber = number - 1
    
    if(newNumber > 0){
        countDown(newNumber)
    }
}

countDown(5)


console.log("First Class")
function hitungLingkaran(radius){
    var pi = 22/7

    function luas(r){return pi * r * r}
    function keliling(r){return 2 * pi *r}
    console.log("Luas : "+luas(radius))
    console.log("Keliling : "+keliling(radius))
}

hitungLingkaran(7)


console.log("Currying")
function tambah(a,b){
    return a+b
}

console.log(tambah(1,2))

// currying function
function tambahCurrying(a){
    return function(b){
        return a + b
    }
}

console.log(tambahCurrying(1)(2))