import express from "express";
import dotenv from "dotenv";
import { createMongooseConnect } from "./lib/index.js";
import {
  AuthRouter,
  UserRouter,
  RoomRouter,
  HotelRouter,
} from "./routes/index.js";

const app = express();
dotenv.config();
createMongooseConnect();
app.use(express.json());

//middlewarees
app.use("/api/auth/", AuthRouter);
app.use("/api/user/", UserRouter);
app.use("/api/room/", RoomRouter);
app.use("/api/hotel/", HotelRouter);

app.listen(8080, () => {
  console.log("connected to back end.");
});
