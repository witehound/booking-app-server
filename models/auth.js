import mongoose from "mongoose";

const authSchema = new mongoose.Schema({});

export default mongoose.model("auth", authSchema);
