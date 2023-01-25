import express from "express";
import dotenv from "dotenv";
import { createMongooseConnect } from "./lib/index.js";

const app = express();
dotenv.config();

createMongooseConnect();

app.listen(9898, () => {
  console.log("connected to back end.");
});
