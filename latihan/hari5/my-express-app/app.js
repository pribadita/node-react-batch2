const express = require('express')
const app = express()
const port = 3000

let movies = [
    {id: 1, title: "Spider-Man", year: 2002},
    {id: 2, title: "John Wick", year: 2014},
    {id: 3, title: "The Avengers", year: 2012},
    {id: 4, title: "Logan", year: 2017},
]

const getMovies = (req, res) => {
    let {title} = req.query
    let {id} = req.query
    let result = ""
    console.log(title)
    console.log(id)

    if(title === undefined){
      title = ""
    }
    
    movies.forEach((item, index) => {
      if(item.title.toLowerCase().includes(title)){
        result += `${index+1}. ${item.title} <br>`
        }
        // console.log(title)
    })
    
    res.send(result)
}

const getMoviesByID = (req, res) => {
    let {id} = req.params

    let result = movies.find(movies => movies.id === Number(id))
    res.send (`${result.title}`)
}

const getApiMovies = (req, res) => {
    let {title} = req.query
   

    if(title === undefined){
      title = ""
    }
    
    let result = movies.filter((item,index) => {
      return item.title.toLowerCase().includes(title)
    })
  
    res.json(result)
}

const getApiMoviesByID = (req, res) => {
    let {id} = req.params

    let result = movies.find(movies => movies.id === Number(id))
    res.json(result)
}

// root
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// ROUTE MOVIE
app.get('/movie', getMovies)
app.get('/movie/:id', getMoviesByID)


// ROUTE MOVIE API
app.get('/api/movie', getApiMovies)
app.get('/api/movie/:id', getApiMoviesByID)


// MIDDLEWARE
const logMiddleware = (req, res, next) => {
  console.log("adan melewati Middleware")
  next()
}

const getText = (req, res) => {
  res.status(400).json({'text' : 'Halaman ini dilewati dengan middleware',
          'status': 400
  })
}

app.get('/middleware', logMiddleware, getText)


// MIDDLEWARE TOKEN
const checkToken = (req, res, next) => {
  let {token} = req.query

  if(token != 12345){
    res.status(400).json({'error' : 'Token salah atau belum dimasukan',
          'status': 400})
  }else{
    next()
  }
}

const getStatus = (req, res) => {
  res.status(400).json({'text' : 'Selamat Datang',
          'status': 100
  })
}

app.get('/middlewareToken', checkToken, getStatus)

// MIDDLEWARE BASIC AUTH
const basicAuth = (req, res, next) => {
  var authHeader = req.headers.authorization

  if(!authHeader){
    var err = "You're not Authorized"
    res.setHeader('WWW-Authentice', 'basic')
    err.status = 401
    return next(err)
  }

  var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')

  var user = auth[0]
  var pass = auth[1] 

  if(user == 'admin123' && pass == 'admin123'){
    next()
  }else{
    var err = "Youre not Authorized"
    res.setHeader('WWW-Authentice', 'basic')
    err.status = 401
    return next(err)
  }
}

const login = (req, res) => {
  res.status(400).json({'text' : 'Selamat Datang',
          'status': 100
  })
}

app.get('/middlewareBasicAuth', basicAuth, login)

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
