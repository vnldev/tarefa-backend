import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import routes from "./routes";

const app = express();
createConnection();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Servidor em Execução');
});