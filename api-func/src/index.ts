import express, {Application} from 'express';
import morgan from "morgan";
import dataBaseConnect from "./config/db.config";
import config from "./config/app.config";
import {baseRouter} from "./controllers/router/base.router";
import bodyParser from "body-parser";

dataBaseConnect();

const app: Application = express();

if (config.node_environment === "development") {
    app.use(morgan("dev"));
}

app.use(bodyParser.json());
app.use(baseRouter);

app.listen(config.port, () => console.log('Server running at http://localhost:3000/'));
