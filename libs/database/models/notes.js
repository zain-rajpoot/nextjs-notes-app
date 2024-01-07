import mongoose, { Schema } from 'mongoose'

var NotesSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
}, { timestamps: true, });

//Export the model
const Notes = mongoose.models.Note || mongoose.model('Note', NotesSchema);
export default Notes;