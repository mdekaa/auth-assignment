import mongoose from 'mongoose';

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log(`Succesfully connected to MongoDB`)
    } catch (error:any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectdb;