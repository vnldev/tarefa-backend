import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import routes from "./routes";

require("dotenv").config();

const config:any = {
   "type": process.env.DB_DIALECT,
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_NAME,
   "synchronize": true,
   "logging": false,
   "entities": [
      "./src/entity/*"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}

const app = express();
createConnection(config);

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Servidor em Execução');
});