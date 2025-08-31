import express from "express";
import cors from "cors";
import dotenv from "dotenv"; //For environment Variables
import path from 'path';

import notesRoutes from "./routes/notesRoutes.js";
import {connectDB}  from "./config/db.js"; //To connect with the database
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()

//Middleware
app.use(express.json()); //This middleware is used to parse JSON bodies: req.body
//Our simple custom middleware to log request method and url
app.use((req,res,next) => {
    console.log(`Req method is ${req.method} & Req url is ${req.url}`);
    next();
})
if(process.env.NODE_ENV !=="production") {
app.use(cors());
}

app.use(rateLimiter);

app.use("/api/notes",notesRoutes);

if(process.env.NODE_ENV === "production") { //Serving the aplication from this server
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    
    app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    });
}
connectDB().then (() => {  //Connect to DB first then start the server

    app.listen(5001, () => {
        console.log("Server started on port: ",PORT);
    });
}).catch((error) => {
    console.error("Failed to connect to DB", error);
});



