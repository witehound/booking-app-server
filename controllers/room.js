import { RoomModel, HotelModel } from "../models/index.js";

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new RoomModel(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await HotelModel.findByIdAndUpdate(hotelId, {
        $push: {
          rooms: savedRoom._id,
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await RoomModel.findByIdAndUpdate(
      req.params.hotelId,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoomAvailability = async (req, res, next) => {
  try {
    await RoomModel.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unAvailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json(`Room status has been updated`);
  } catch (err) {
    next(err);
  }
};

const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await RoomModel.findByIdAndDelete(req.params.id);
    try {
      await HotelModel.findByIdAndUpdate(hotelId, {
        $pull: {
          rooms: req.params.id,
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json({ message: `Deleted room ${req.params.id}` });
  } catch (err) {
    next(err);
  }
};

const fetchRoom = async (req, res, next) => {
  try {
    const room = await RoomModel.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

const fetchRooms = async (req, res, next) => {
  try {
    const rooms = await RoomModel.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

export {
  createRoom,
  updateRoom,
  fetchRoom,
  fetchRooms,
  deleteRoom,
  updateRoomAvailability,
};
