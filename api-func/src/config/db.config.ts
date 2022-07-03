import mongoose from "mongoose";
import dotenv from "dotenv";
import config from "./app.config";

dotenv.config();

function dataBaseConnect() {
    mongoose.connect(config.database_url)
        .then(() => console.log("Database connected"))
        .catch((error: Error) => {
            console.error("Database connection failed", error);
            process.exit(1);
        });
}

export default dataBaseConnect;
