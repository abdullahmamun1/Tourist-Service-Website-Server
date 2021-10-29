const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hqjve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        console.log('db connected');

        const database = client.db("travelService");
        const destinationCollection = database.collection("destinations");
        console.log(database);


        //GET API
        app.get('/destinations', async (req, res) => {
            const cursor = destinationCollection.find({});
            const destinations = await cursor.toArray();
            res.json(destinations);

        })

        //POST API


        //DELETE API


        //UPDATE API

    }
    finally {
        // await client.close()
    }
}
run().catch(console.dir);


//ROOT
app.get('/', (req, res) => {
    res.send('server connected')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})