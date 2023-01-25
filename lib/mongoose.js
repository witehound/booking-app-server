import mongoose from "mongoose";

export const createMongooseConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_CONNECTION, () => {
      console.log("mongodb connected");
    });
  } catch (e) {
    console.log("mongoose error", e);
  }
};
