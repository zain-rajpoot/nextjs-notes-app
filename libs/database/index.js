import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
async function Database() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connection Succeeded.")
    } catch (error) {
        console.log(error.message);
    }
}

export default Database;
