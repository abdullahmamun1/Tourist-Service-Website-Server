const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

//middleware
app.use(cors())
app.use(express.json())

//GET API


//POST API


//DELETE API


//UPDATE API


//ROOT
app.get('/', (req, res) => {
    res.send('server connected')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})