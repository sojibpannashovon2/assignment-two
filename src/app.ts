import express, { Application, Request, Response } from "express";

import cors from "cors";
import { ProductRoute } from "./app/modules/products/product.route";
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

//? Aplication Router
app.use("/api/v1/products", ProductRoute);
//Chech server connection

app.get("/", (req: Request, res: Response) => {
  console.log(`Project two is connect succesfully !!`);
});

export default app;
