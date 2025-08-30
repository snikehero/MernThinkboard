import moongose, { mongo } from "mongoose";


// 1- Create a schema
// 2- Create a model based of that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    


}, {    timestamps: true} //createdAt,updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
