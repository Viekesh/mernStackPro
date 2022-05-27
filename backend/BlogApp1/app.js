import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";



const app = express();

app.use(express.json());

app.use("/api/user", router);

app.use("/api/blog", blogRouter);

const port = process.env.port || 8001;

const connection_url = "mongodb+srv://PRO-TSTNG:CHIN%40test999@mernstackpro.wr2mo.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected")
}).catch((error) => {
    console.log(error.message)
});

app.listen(port, () => {
    console.log(`server running on port no. ${port}`)
});