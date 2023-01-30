require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'Cristian Ordoñez'
    ,titulo : 'Curso 2022'
  })
})
app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'Cristian Ordoñez'
    ,titulo : 'Curso 2022'
  })
})
app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'Cristian Ordoñez'
    ,titulo : 'Curso 2022'
  })
})


app.listen(port);
console.log('App iniciada en ' + port)