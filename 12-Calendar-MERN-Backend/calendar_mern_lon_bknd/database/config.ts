import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

export const dbMONGOConnection = async () => {
    try {
        await mongoose.connect(process.env.CALMERN_MONGODB_CNN || '', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            //   useCreateIndex: true,
            //   useFindAndModify: false,
        });
        console.log("Database ONLINE");
    } catch (error) {
        console.log(error);
        throw new Error("Problems to connecta database");
    }
};