import { UserModel } from "../models/index.js";

const createUseer = async (req, res, next) => {
  const newUser = new UserModel(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const fetchUser = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const fetchAllUsers = async (req, res, next) => {
  try {
    const allHotels = await HotelModel.find();
    res.status(200).json(allHotels);
  } catch (err) {
    next(err);
  }
};

export { createUseer, updateUser, deleteUser, fetchUser, fetchAllUsers };
