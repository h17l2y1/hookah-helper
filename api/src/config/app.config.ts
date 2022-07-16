import dotenv from "dotenv";
import {Environment} from "../models/environment";

dotenv.config();

const config = {
    port: process.env.PORT,
    node_environment: process.env.NODE_ENVIRONMENT,
    database_url: process.env.DB_CONNECTION,
} as unknown as Environment

export default config;
