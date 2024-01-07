import mongoose, { Schema } from 'mongoose'

var NotesSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
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