import { HotelModel } from "../models/index.js";

const createHotel = async (req, res) => {
  const newHotel = new HotelModel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(err);
  }
};

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(err);
  }
};

const deleteHotel = async (req, res) => {};

const fetchHotel = async (req, res) => {};

const fetchAllHotels = async (req, res) => {};

export { createHotel, updateHotel, deleteHotel, fetchHotel, fetchAllHotels };
