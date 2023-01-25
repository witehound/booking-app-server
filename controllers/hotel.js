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
    res.status(500).json(err);
  }
};

const deleteHotel = async (req, res) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Deleted hotel ${req.params.id}` });
  } catch (error) {
    res.status(500).json(err);
  }
};

const fetchHotel = async (req, res) => {
  try {
    const hotel = await HotelModel.findById(req.body.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(err);
  }
};

const fetchAllHotels = async (req, res) => {
  try {
    const allHotels = await HotelModel.find();
    res.status(200).json(allHotels);
  } catch (error) {
    res.status(500).json(err);
  }
};

export { createHotel, updateHotel, deleteHotel, fetchHotel, fetchAllHotels };
