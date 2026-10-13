import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const dbConnect = async (url) => {
    try {
        await mongoose.connect(url + "");
        console.log("MONGO connected");
    } catch (error) {
        console.log("error ", error.message);
        return;
    }
};


export default dbConnect
