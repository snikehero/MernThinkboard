import express from "express";

const app = express();

app.get("/api/notes", (req,res) => {
    res.send("You got 5 notes");
});
app.listen(5001, () => {
    console.log("Server started on port: 5001");
});