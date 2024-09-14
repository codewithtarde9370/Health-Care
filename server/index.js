import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONDODB_URI;
const app = express();

app.use(express.json()); //middleware parses the data in the request to json format
app.use(cors()); //handles the access from the specific origins

(async () => {
    const conn = await mongoose.connect(MONGO_URI);

    if (conn){
        console.log("Successfully Connected to MongoDB!!")
    }})();  //IIFE form of connectDB function

    app.listen(PORT, () =>{
        console.log(`Server is running on the Port ${PORT}`);
    })
