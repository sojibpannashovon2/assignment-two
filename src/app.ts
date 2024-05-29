import express, { Application, Request, Response } from "express";

import cors from "cors";
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

//Chech server connection

app.get("/", (req: Request, res: Response) => {
  console.log(`Project two is connect succesfully !!`);
});

export default app;
