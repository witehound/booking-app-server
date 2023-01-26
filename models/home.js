import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [
      {
        number: Number,
        unAvailableDates: {
          type: [Date],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("home", homeSchema);
