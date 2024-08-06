import express, { Router, Express, Request, Response } from "express";
import { AppDataSource } from "./data-source";
import mainRouter from "./router/mainRouter";
import cors from "cors";

AppDataSource.initialize();

console.log("here1");
const app: Express = express();
const port = 3000;

var corsOptions = {
  origin: "http://localhost:8081",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//app.use(cors); /* NEW */
// app.use(express.json());
// const allowedOrigins = ["http://localhost:8081/"];
// const options: cors.CorsOptions = {
//   origin: allowedOrigins,
// };
// app.use(cors(options));

const router = Router();

app.use("/", cors(corsOptions), mainRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
