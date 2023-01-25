import mongoose from "mongoose";

export const createMongooseConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_CONNECTION);
  } catch (e) {
    throw e;
  }
};
