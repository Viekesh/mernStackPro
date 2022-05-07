const express = require("express");
require("./data-base/connection");



const app = express();

port = 3003;

app.listen(port, () => {
    console.log(`server is start on port no. ${port}`);
});