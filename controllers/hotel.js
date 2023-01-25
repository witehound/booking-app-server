import { HotelModel } from "../models/index.js";

const createHotel = async (req, res, next) => {
  const newHotel = new HotelModel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Deleted hotel ${req.params.id}` });
  } catch (error) {
    next(error);
  }
};

const fetchHotel = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

const fetchAllHotels = async (req, res, next) => {
  try {
    const allHotels = await HotelModel.find();
    res.status(200).json(allHotels);
  } catch (error) {
    next(error);
  }
};

export { createHotel, updateHotel, deleteHotel, fetchHotel, fetchAllHotels };
