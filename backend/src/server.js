import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB}  from "./config/db.js"; //To connect with the database
import dotenv from "dotenv"; //For environment Variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();
//Middleware
app.use(express.json()); //To parse JSON request bodies
app.use("/api/notes",notesRoutes);


app.listen(5001, () => {
    console.log("Server started on port: ",PORT);
});


