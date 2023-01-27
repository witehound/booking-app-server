import { HotelModel, RoomModel } from "../models/index.js";

const createHotel = async (req, res, next) => {
  const newHotel = new HotelModel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
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
  } catch (err) {
    next(err);
  }
};

const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Deleted hotel ${req.params.id}` });
  } catch (err) {
    next(err);
  }
};

const fetchHotel = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

const fetchAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const allHotels = await HotelModel.find({
      ...others,
      cheapestPrice: {
        $gt: min || 1,
        $lt: max || 9999,
      },
    }).limit(req.query.limit);
    res.status(200).json(allHotels);
  } catch (err) {
    next(err);
  }
};

const fetchCountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return HotelModel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

const fetchCountByType = async (req, res, next) => {
  try {
    const hotelCount = await HotelModel.countDocuments({ type: "hotel" });
    const apartmenntCount = await HotelModel.countDocuments({
      type: "apartment",
    });
    const resortCount = await HotelModel.countDocuments({ type: "resort" });
    const villaCount = await HotelModel.countDocuments({ type: "villa" });
    const cabinCount = await HotelModel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmenntCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

const geHotelRooms = async (req, res, next) => {
  try {
    const hotelRooms = await HotelModel.findById(req.params.id);
    const rooms = await Promise.all(
      hotelRooms.rooms.map((room) => {
        return RoomModel.findById(room);
      })
    );
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export {
  createHotel,
  updateHotel,
  deleteHotel,
  fetchHotel,
  fetchAllHotels,
  fetchCountByCity,
  fetchCountByType,
  geHotelRooms,
};
