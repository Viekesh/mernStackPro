const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");



app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
})

port = 3003;

app.get("/", (req, res) => {
    res.send("socket chat be started");
});

app.listen(port, () => {
    console.log(`app started at port no. ${port}`);
});



// we start our server

// cors : "CORS" stands for "Cross Origin Resource Sharing". It allows you to make request from one website to another website in the browser, which is normally prohibited by another browser policy called the "Same Origin Policy" (SOP).
// If cors is implemented badly, CORS can lead to major security risk like leaking of API keys, other users data or even much more. A very great ex of security risk of CORS misconfiguration is this.

// So we required these four libraries (socket.io, expressjs, mongoose, cors) for our chat app.

// Now we initialize "app" with "CORS" : (app.use(cors());)

// 