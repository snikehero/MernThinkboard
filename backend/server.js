import express from "express";

const app = express();



//ROUTES 
//Listen for get requests
app.get("/api/notes", (req,res) => {
    res.status(200).send("You got 15 notes");
});

app.post("/api/notes", (req,res) => {
    res.status(201).json({message:"Note created successfully"});
});

app.put("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"Note updated succesfully"});
});

app.delete("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"Note deleted succesfully"}); 
});


app.listen(5001, () => {
    console.log("Server started on port: 5001");
});