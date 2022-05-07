const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const users = new mongoose.model("userData", userSchema);

module.exports = users;



// userData : It is a name of cluster we created in mongoDB database, note that the cluster name
// and the name you entered above should be same until its create new cluster automatically and
// save data on it.