import mongoose from "mongoose";

export const createMongooseConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    throw e;
  }
};
