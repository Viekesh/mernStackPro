const mongoose = require("mongoose");

const db_url = "mongodb+srv://mernStack:CHIN%40mernStack9@cluster0bookstoreapp.ee7hp.mongodb.net/BookStoreApp?retryWrites=true&w=majority";

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("server connected to the databse")
}).catch((error) => {
    console.log(error.message)
});