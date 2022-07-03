// import dotenv from "dotenv";
// import {stopApp} from "../utils/helpers";
// import {checkIsNull} from "../utils/helpers/checkIsNull";
// import {EnvironmentInterface} from "./interface/environment.interface"
//
// dotenv.config();
//
// const config = {
//   node_environment: process.env.NODE_ENVIRONMENT,
//   port: process.env.SERVER_PORT,
//   database_url: process.env.DATABASE,
// };
//
// checkIsNull(config, (msg: string) => stopApp(`Missing field ${msg} in env`))
//
// export default (config as EnvironmentInterface);
