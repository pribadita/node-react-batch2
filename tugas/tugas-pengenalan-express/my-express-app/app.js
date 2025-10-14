const express = require('express')
const app = express()
const port = 3000

let dataOrang =[
{id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
{id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
{id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
{id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
{id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
]

const getDataOrang = (req, res) => {

  let {gender, age} = req.query;
  let result = ''

  

  console.log(gender)

  dataOrang.forEach((item, index) => {




    if(item.jenisKelamin.toLowerCase().includes(gender) && item.umur >= Number(age)){
      result += `${index+1}. ${item.name} <br>`
      // console.log(result)
    }
    // console.log(item.jenisKelamin.toLowerCase().includes(gender) && item.umur >= Number(age))
  })

  res.send(result)

  // // let result = dataOrang.find((item) => item.jenisKelamin === gender || item.umur >= Number(age))
  // let result = dataOrang.filter((item,index) => {
  //     return item.jenisKelamin.toLowerCase().includes(gender)
  //   })


  // res.json(result)
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/data-orang', getDataOrang)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
