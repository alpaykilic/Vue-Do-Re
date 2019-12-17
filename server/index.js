const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Middleware

app.use(bodyParser.json())
app.use(cors())

const products = require('./routes/api/products')
app.use('/api/products', products)

const uye = require('./routes/api/uye')
app.use('/api/uye', uye)

const posts = require('./routes/api/posts')
app.use('/api/posts', posts)

const urun2 = require('./routes/api/urun2')
app.use('/api/urun2', urun2)

const fiyatsirala = require('./routes/api/fiyatsirala') //1 = piyano 2=tuşlular
app.use('/api/fiyatsirala', fiyatsirala)

const fiyatsirala2 = require('./routes/api/fiyatsirala2') //1 = piyano 2=tuşlular
app.use('/api/fiyatsirala2', fiyatsirala2)

const adsirala = require('./routes/api/adsirala')
app.use('/api/adsirala', adsirala)

const adsirala2 = require('./routes/api/adsirala2')
app.use('/api/adsirala2', adsirala2)

const imageSlide = require('./routes/api/imageSlide')
app.use('/api/imageSlide', imageSlide)

const piyanolar = require('./routes/api/piyanolar')
app.use('/api/piyanolar', piyanolar)

const tuslular = require('./routes/api/tuslular')
app.use('/api/tuslular', tuslular)

const piyanourun = require('./routes/api/piyanourun')
app.use('/api/piyanourun', piyanourun)

const tusluurun = require('./routes/api/tusluurun')
app.use('/api/tusluurun', tusluurun)

const arama1 = require('./routes/api/arama1')
app.use('/api/arama1', arama1)

const arama2 = require('./routes/api/arama2')
app.use('/api/arama2', arama2)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server started on port ' + port))
