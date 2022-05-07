require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./data-base/connection");
const users = require("./models/userSchema");
const router = require("./routes/routes");



const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

port = 3003;

app.listen(port, () => {
    console.log(`server is start on port no. ${port}`);
});



