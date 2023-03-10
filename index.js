import express from "express";
import dotenv from "dotenv";
import { createMongooseConnect, errorHandler } from "./lib/index.js";
import {
  AuthRouter,
  UserRouter,
  RoomRouter,
  HotelRouter,
} from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cookieParser());
dotenv.config();
createMongooseConnect();

app.use(
  cors({
    credentials: true,
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_URL
        : "http://localhost:3000",
  })
);

app.use(express.json());

//middlewarees
app.use("/api/auth/", AuthRouter);
app.use("/api/user/", UserRouter);
app.use("/api/room/", RoomRouter);
app.use("/api/hotel/", HotelRouter);

app.use(errorHandler);

app.listen(8080, () => {
  console.log("connected to back end.");
});
