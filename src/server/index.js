const express = require('express')
const app = express()
const dbConnect = require(`${__dirname}/db/dbConnect`)
const morgan = require('morgan')


const itinerariesRouter = require('./routes/ItineraryRoutes')


app.use(morgan('dev'))
app.use(express.json())

dbConnect()

//MIDDLEWEARES

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => {
  console.log('hello from middleware')
  next()
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})


app.use('/api/v1/itineraries', itinerariesRouter)

module.exports = app