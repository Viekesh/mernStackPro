import mongoose from "mongoose";



const cardSchema = mongoose.Schema({
    id: String,
    name: String,
    imgUrl: String
});

export default mongoose.model("tindercard", cardSchema);