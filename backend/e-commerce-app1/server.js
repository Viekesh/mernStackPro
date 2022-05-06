const app = require("./app");
const dotenv = require("dotenv");



// config
dotenv.config({ path: "./config/config.env" });

app.listen(process.env.port, () => {
    console.log(`server is working on http://localhost:${process.env.port}`);
});








// We will create a variable for "process.env.port" in the inside the config.env file.