const mongoose = require("mongoose");

const db = "mongodb+srv://PRO-TSTNG:CHIN%40test999@mernstackpro.wr2mo.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Server is connected to the database");
}).catch((error) => {
    console.log(error.message);
});