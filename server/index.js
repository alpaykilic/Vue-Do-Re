const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

const urun2 = require('./routes/api/urun2');
app.use('/api/urun2', urun2);

const imageSlide = require('./routes/api/imageSlide');
app.use('/api/imageSlide', imageSlide);

const piyanolar = require('./routes/api/piyanolar');
app.use('/api/piyanolar', piyanolar);

const tuslular = require('./routes/api/tuslular');
app.use('/api/tuslular', tuslular);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));