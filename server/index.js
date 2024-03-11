const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const cors = require('cors');
require('dotenv').config();

//middle ware
app.use(cors());
app.use(express.json());


// Mongo server connect 
const uri = `mongodb+srv://asshovo98:r7Bs4WZ1ik8yWwCM@bongotravel.cwp7zbv.mongodb.net/?retryWrites=true&w=majority&appName=bongoTravel`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


console.log(uri)

async function run() {
    try {
        await client.connect(); // database connection 
        const database = client.db('bongoTravels'); // database name
        // Collection Name
        const tourCollection = database.collection('tourCollection');
        const tourGuidCollection = database.collection('tourGuid');
        const tourUserCollection = database.collection('tourUser');
        const usersCollection = database.collection("users");

        console.log('connect');


        // -------------------------------------------------
        // add User And Users route

        app.post('/users', async(req, res)=>{
            const user = req.body;
            const result = await usersCollection.insertOne(user)
            res.json(user)
        });

        app.put('/users', async(req, res) =>{
            const user = req.body;
            const quary = {email : user.email};
            console.log(user, quary);
            const options = {upsert: true};
            const updateDoc = {$set:{displayName: user.displayName}};
            const result = await usersCollection.updateOne(quary, updateDoc, options);
            res.json(result);

        });
        
    // ______________________________________________________________________________________

         // make Admin
         app.put('/users/admin', async (req, res) => {
            const user = req.body;
            const filter = {email : user.email};
            const updateDoc = {$set:{role: 'admin'}};
            const result = await usersCollection.updateOne(filter, updateDoc);
            res.json(result)
        });

        // Confirm to admin make admin
        app.get('/users/:email', async(req, res)=>{
            const email = req.params.email;
            const quary = {email : email};
            const user = await usersCollection.findOne(quary);
            let isAdmin = false;
            if(user?.role === 'admin'){
                isAdmin = true;
            }
            res.json({admin: isAdmin})
        });

        // __________________________________________________________________


        // POST API // services Post

        app.post('/tourService', async (req, res) => {
            const services = req.body;
            const result = await tourCollection.insertOne(services);
            res.json(result);
        })

        // GET API
        app.get('/tourService', async (req, res) => {
            const cursor = tourCollection.find({});

            const result = await cursor.toArray();
            res.send(result);
        })


        // Get API Guid

        app.get('/tourGuid', async (req, res) => {
            const cursor = tourGuidCollection.find({});

            const result = await cursor.toArray();
            res.send(result);
        })

        // single data API

        app.get('/tourService/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = {_id: new ObjectId(id)};
            const result = await tourCollection.findOne(query);
            res.send(result);
        })


        // APP API manage order 

        app.post('/tourManage', async (req, res) => {
            const cursor = req.body;
            const result = await tourUserCollection.insertOne(cursor);

            res.send(result);
        })

        // ALL USER ORDER 
        app.get('/tourManage', async (req, res) => {
            const cursor = tourUserCollection.find({});
            const result = await cursor.toArray();
            res.send(result);
        })

        // DELETE API Manage Users
        app.delete('/tourManage/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await tourUserCollection.deleteOne(query);
            res.send(result);
        })

        // user Data api
        app.get('/userTour/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const result = await tourUserCollection.find(query).toArray();
            res.send(result);
        })

        // user Tour Data delete API
        app.delete('/userTour/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await tourUserCollection.deleteOne(query);
            res.send(result);
        })

        // Update Data API
        app.put('/tourManage/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const updateData = req.body;
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    status: updateData.status
                },
            };

            const result = await tourUserCollection.updateOne(query, updateDoc, options)
            res.send(result)

        })


    }
    finally {

    }
}

run().catch(console.dir());






// server 
// get method

app.get('/', (req, res) => {
    res.send('i am from Server');
})

app.listen(port, () => {
    console.log('server is running ', port);
})
