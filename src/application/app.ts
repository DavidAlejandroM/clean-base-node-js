import express, { Application, Request, Response, urlencoded } from "express";
import dotenv from "dotenv";
import * as http from "http";
import * as expressWinston from "express-winston";
import cors from "cors";
import debug from "debug";
import morgan from "morgan";

import { AbstractRoutesConfig } from "../infrastructure/helpers/abstract-entry-points/abstract-routes-config";
import { LoggerOptions } from "./config/logger";
import { SyncDataScheduler } from "../infrastructure/entry-points/scheduler/cron/sync-data-scheduler";
import { RoutesConfig } from "./../infrastructure/entry-points/rest/config/routes-config";
import {mongoConnection} from "../infrastructure/driven-adapters/mongo-repository/config/mongo-config";

const app: Application = express();
const server: http.Server = http.createServer(app);
const debugLog: debug.IDebugger = debug("app");
let routes: Array<AbstractRoutesConfig> = [];

dotenv.config();

// middleware
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(expressWinston.logger(LoggerOptions.getLoggerOptions()));

routes = RoutesConfig.getRoutes(app);
const scheduler = new SyncDataScheduler();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("CCURE");
});

server.listen(process.env.PORT, () => {
  routes.forEach((route: AbstractRoutesConfig) => {
    debugLog(`Routes configured for the  ${route.getName()}`);
  });
  console.info(`Server running at http://localhost:${process.env.PORT}`);
});

mongoConnection();
