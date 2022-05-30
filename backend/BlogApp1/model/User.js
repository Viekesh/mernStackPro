import mongoose from "mongoose";



const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: Number, String,
        required: true,
        minlength: 6,
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog",
            required: true,
        },
    ]
});

export default mongoose.model("User", userSchema);









// Now everything is working fine from the user and the blogs perspective
// We can create, read, update, delete and also find
// And now the thing which is remaining is the user relations
// Now we relate the user with the blogs and the blogs with the user
// To do this we one thing inside the mongoose
// So we can just provide the reference to the collection of the blogs from the users...
// and vice-versa from the blogs to the users as well



// Now we can just provide the reference to the user
// user: {
//    type: String,
//    required: true,
// }

// It is not the type of the string it will be type of the mongoose
// user: {
//     type: mongoose.Types.ObjectId,
//     ref:"User",
//     required: true,
// }

// So we have the id from the user from there and then we can specify the object id from there
// After this we need to specify one more thing we need to specify a reference
// So the ref is used to provide the reference and then it will just provide a reference...
// inside the string we need to define the collection name
// The collection name that we have just created the model it will be the user so it...
// will just store the collection as the "User"

// Now we have defined the user as a type because the mongoose.type of object id...
// and we have specified the reference of the user and now the thing is that each blog contain
// only one single user
// So the each blog will now they have parent of the one single user but each user can have the...
// multiple blog so here we are only defining only single user per single blog but when we will...
// move on to the user
// Now we can define here the blogs field with the blogs but it will...
// be an array because user can have multiple blogs inside that and array will contain an object...
// it will be the type and the type will be same as the mongoose.type schema dot objectId

// "blogs:[{mongoose.Types.objectId}]"

// And we can define the reference also it will contain the reference to the blog

// The blog is the collection and it will just contain a reference and then it will the...
// required field also.



// So now everything should work fine as before but now we need to change few things we need to...
// move on the users controller and once we are creating a new user like in this sign up...
// it will be having a blogs because now we have now defined the required field of the blogs...
// So it will just have some blogs inside that
// So once we are defining the user as the name and the password then we can just defined the blogs...
// will be equals to an empty array
// So it will just store the empty blogs as an empty array so if I will now save and if i will now...
// just move on to the signup request of the user



// So now everything is working fine till now
// We just make a sign up request and we get a blog from user as an empty array
// So now everything ia working fine inside the user and now the users is completed