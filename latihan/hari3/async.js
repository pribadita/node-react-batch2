// setTimeout(() => {
//     console.log("Saya dijalankan Belakangan")
// }, 3000);

// console.log("Saya dijalankan Pertama")
// console.log("Saya dijalankan Terlebih Dahulu")

console.log("")
console.log("CALLBACK")
function periksaDokter(nomerAntri, callback){
    if(nomerAntri > 5){
        callback(false)
    }else{
        callback(true)
    }
}

periksaDokter(6, function(check){
    if(check){
        console.log("Sebentar Lagi Giliran Saya")
    }else{
        console.log("Saya Jalan-Jalan DUlu")
    }
})



console.log("")
console.log("CONTOH LAIN CALLBACK")

function periksaAntrianDokter(nomerAntri, callback){
    console.log(`Sekarang antrian ke-${nomerAntri}`)
    setTimeout(() => {
        if(nomerAntri === 10 ){
            console.log("Saya Masuk Ruangan Dokter")
            callback(0)
        }else{
            console.log("Saya Masih menunggu")
            callback(nomerAntri+1)
        }
    }, 1000)
}

function execute(nomorAntri){
    periksaAntrianDokter(nomorAntri, function(nomorAntriBaru){
        if(nomorAntriBaru !== 0){
            execute(nomorAntriBaru)
        }
    })
}

// execute(5)

// periksaAntrianDokter(7, function(nomorAntriBaru){
//         periksaAntrianDokter(nomorAntriBaru, function(nomorAntriBaru1){
//             periksaAntrianDokter(nomorAntriBaru1, function(nomorAntriBaru2){
//                 periksaAntrianDokter(nomorAntriBaru2, function(nomorAntriBaru3){
//                     periksaAntrianDokter(nomorAntriBaru3, function(nomorAntriBaru4){
//                         periksaAntrianDokter(nomorAntriBaru4, function(nomorAntriBaru5){
//                             return nomorAntriBaru5
//                         })
//                     })  
//                 })
//             })
//         })
// })


// console.log("")
// console.log("PROMISE")

// var isMomHappy = false

// var willGetNewPhone = new Promise(
//     function(resolve, reject){
//         if (isMomHappy){
//             var phone = {
//                 brand: "Samsung",
//                 color: "Black"
//             }
//             resolve(phone)
//         }else{
//             var reason = new Error ('mom is not happy, Promise Rejected')
//             reject(reason)
//         }
//     }
// )

// function askMom(){
//     willGetNewPhone.then(function(fulfilled){
//         console.log(fulfilled)
//     })
//     .catch(function(error){
//         console.log(error.message)
//     })
// }

// askMom()

// console.log("")
// console.log("CONTOH PROMISE LAINNYA")


// function periksaDataPasien(nomorIdPasien){
//     var dataPasien = [
//         {id:1, nama: "Jhon", jenisKelamin: "Laki-Laki"},
//         {id:2, nama: "Michael", jenisKelamin: "Laki-Laki"},
//         {id:3, nama: "Sarah", jenisKelamin: "Perempuan"},
//         {id:4, nama: "Frank", jenisKelamin: "Laki-Laki"}
//     ]

//     return new Promise(function (resolve, reject){
//         var pasien = dataPasien.find(x => x.id === nomorIdPasien)

//         if(pasien === undefined){
//             reject("Error")
//         }else{
//             resolve(pasien)
//         }
//     })
// }


// periksaDataPasien(6).then(function(data){
//     console.log(data)
// }).catch(function(error){
//     console.log(error)
// })



console.log("")
console.log("ASYNC/AWAIT")

function doAsync(){
    return new Promise(function (resolve, reject){
        var check = false
        if (check){
            resolve("Berhasil")
        }else{
            reject("Gagal")
        }
    })
}

// doAsync().then(function(res){
//     console.log(res)
// }).catch(function(rej){
//     console.log(rej)
// })

// async function hello() {
//     var result = doAsync()
//     console.log(result)
// }

async function hello() {
    console.log("Try..Catch")
    try{
    var result = await doAsync()
    console.log(result)
    }catch(err){
        console.log(err)
    }
}

hello()