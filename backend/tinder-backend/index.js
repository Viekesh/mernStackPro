import express from "express";
import mongoose from "mongoose";
import cardSchema from "../tinder-backend/dbCards.js";
import cors from "cors";



// App Config

const app = express();

const port = process.env.port || 8001;

const connection_url = "mongodb+srv://PRO-TSTNG:CHIN%40test999@mernstackpro.wr2mo.mongodb.net/?retryWrites=true&w=majority";


// Middlewares

app.use(express.json());

app.use(cors());


// DB Config

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected")
}).catch((error) => {
    console.log(error.message)
});


// API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello there"));

app.post("/tinder/card", (req, res) => {
    const dbCard = req.body;

    cardSchema.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.get("/tinder/card", (req, res) => {
    cardSchema.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


// Listener

app.listen(port, () => {
    console.log(`server running on port no. ${port}`)
});




// To install nodemon type "sudo npm install -g nodemon"