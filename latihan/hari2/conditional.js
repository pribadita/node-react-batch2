console.log("IF")
console.log("")

if (true)
    {
    console.log("Eksekusi Hasil True")
}

if (false){
    console.log("Eksekusi Hasil False")
}

var mood = "happy"
if(mood == "sedih"){
    console.log("Hari ini saya sedang bahagia")
}



console.log("IF ELSE")
console.log("")

var mood = "happy"
if(mood == "sedih"){
    console.log("Hari ini saya sedang bahagia")
}else {
    console.log("Hari ini saya sedang sedih")
}

console.log("ELSE IF")
console.log("")

var mood = "marah"
if(mood == "happy"){
    console.log("Hari ini saya sedang bahagia")
}else if(mood == "sedih"){
    console.log("Hari ini saya sedang sedih")
}else{
    console.log("saya baik-baik saja")
}

console.log("NESTED IF")
console.log("")

var minimarketstatus = "open"
var telur = "soldout"
var buah = "ready"
if (minimarketstatus == "open"){
    console.log("saya akan membeli telur dan buah")
    if(telur == "soldout" && buah == "soldout"){
        console.log("Telur dan buah Habis, saya pulang lagi")
    }else if (telur == "soldout"){
        console.log("Telur Habis, Buah Ready")
        console.log("Belanjaan saya tidak lengkap")
    }else if (buah == "soldout"){
        console.log("Buah Habis, Telur Ready")
        console.log("Belanjaan saya tidak lengkap")
    }else{
        console.log("Belanjaan saya sudah lengkap")
    }
}else{
    console.log("Mini Market Tutup Saya Pulang aja")
}

console.log("SWITCH CASE")
console.log("")

var buttonPushed = 5
switch(buttonPushed){
    case 1 :{
        console.log("Matikan TV");
        break
    }case 2 :{
        console.log("Turunkan Volume TV");
        break
    }case 3 :{
        console.log("Tingkatkan Volume TV");
        break
    }case 4 :{
        console.log("Matikan Suara TV");
        break
    }default :{
        console.log("tidak terjadi apa")
    }
}

console.log("")

var warna = "merah"
switch(warna){
    case "hitam" :{
        console.log("black");
        break
    }case "merah" :{
        console.log("red");
        break
    }case "biru" :{
        console.log("blue");
        break
    }case "hijau" :{
        console.log("green");
        break
    }default :{
        console.log("pilihan belum tersedia")
    }
}

console.log("Ternary Operator")
console.log("")

var umur = 17
if(umur >= 17) {
    console.log("Boleh Memiliki KTP")
}else{
    console.log("Belum Boleh Memiliki KTP")
}

var cekKTP = umur >= 17 ? "Boleh Memiliki KTP" : "Belum Boleh Memiliki KTP"
console.log(cekKTP)