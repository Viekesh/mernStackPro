const express = require("express");
const cors = require("cors");
require("./data-base/connection");
const router = require("./routes/books-route");
const bodyParser = require("body-parser");



const app = express();

app.use("/books", router);

app.use(cors);

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

const port = process.env.port || 3003;

app.listen(port, () => {
    console.log(`server started on port no. ${port}`);
});