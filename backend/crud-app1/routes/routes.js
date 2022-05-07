const express = require("express");
const users = require("../models/userSchema");



const router = express.Router();

// router.get("/", (req, res) => {
//     console.log("connect");
// });

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { name, email, job, mobile, age, description } = req.body;

    if (!name || !email || !job || !mobile || !age || !description) {
        res.status(404).send("Please fill the form");
    }

    try {
        const preuser = await users.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
            res.status(404).send("This user is already present");
        } else {
            const adduser = new users({
                name, email, job, mobile, age, description
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);

        }
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;



// In above try-catch statement the first email is the database email and after color is the
// users email. We check here user entered email is already present in the database or not.
// If email is present it means that user is already registered, in this condition we are not
// registered this user again.

// else if it is a new user then we save his entered data to the database.

// Now let's understand what we shall do here...
// " const { name, email, job, mobile, age, description } = req.body; "  ===  Here we shall define
// our variable and inside this we add users data such as name, email, mobile... etc.

// " if (!name || !email || !job || !mobile || !age || !description) {
//    res.status(404).send("Please fill the form");
// } "  ===  Here if user doesn't fill any data so we will show an error to the user.