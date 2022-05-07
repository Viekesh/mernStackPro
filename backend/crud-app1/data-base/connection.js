const mongoose = require("mongoose");

const db = "mongodb+srv://mernStack:CHIN%40mernStack9@cluster0.t7asi.mongodb.net/mernStack?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Server is connected to the database");
}).catch((error) => {
    console.log(error.message);
});